interface ListingData {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  location: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface ListingOptions {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  location?: string;
  features?: string[];
}

export class RandomListingGenerator {
  private categories = [
    'Technology',
    'Real Estate',
    'Automotive',
    'Fashion',
    'Home & Garden',
    'Sports & Recreation',
    'Electronics',
    'Books & Media',
    'Health & Beauty',
    'Business & Industrial'
  ];

  private locations = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA',
    'San Antonio, TX',
    'San Diego, CA',
    'Dallas, TX',
    'San Jose, CA'
  ];

  private features = [
    'New',
    'Used - Like New',
    'Used - Good',
    'Used - Fair',
    'Free Shipping',
    'Local Pickup',
    'Warranty Included',
    'Original Packaging',
    'Customizable',
    'Bulk Available'
  ];

  generateListing(options: ListingOptions = {}): ListingData {
    const category = options.category || this.getRandomItem(this.categories);
    const title = this.generateTitle(category);
    const description = this.generateDescription(title, category);
    const price = this.generatePrice(options.priceRange);
    const location = options.location || this.getRandomItem(this.locations);
    const images = this.generateImages(category);
    const features = this.generateFeatures(options.features);
    const specifications = this.generateSpecifications(category);
    const contact = this.generateContact();

    return {
      id: this.generateId(),
      title,
      description,
      price,
      category,
      location,
      images,
      features,
      specifications,
      contact,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  generateMultipleListings(count: number, options: ListingOptions = {}): ListingData[] {
    const listings: ListingData[] = [];
    
    for (let i = 0; i < count; i++) {
      listings.push(this.generateListing(options));
    },
    
    return listings;
  }

  private generateTitle(category: string): string {
    const titles = {
      'Technology': ['MacBook Pro', 'iPhone 15', 'Samsung Galaxy', 'Dell XPS', 'iPad Air'],
      'Real Estate': ['Modern House', 'Luxury Condo', 'Studio Apartment', 'Family Home', 'Townhouse'],
      'Automotive': ['Tesla Model 3', 'BMW X5', 'Mercedes C-Class', 'Honda Civic', 'Toyota Camry'],
      'Fashion': ['Designer Dress', 'Luxury Handbag', 'Premium Watch', 'Designer Shoes', 'Fashion Accessory'],
      'Home & Garden': ['Garden Tool', 'Home Decor', 'Furniture Piece', 'Kitchen Appliance', 'Outdoor Equipment']
    };

    const categoryTitles = titles[category as keyof typeof titles] || ['Quality Item'];
    return `${this.getRandomItem(categoryTitles)} ${Math.floor(Math.random() * 1000) + 1}`;
  }

  private generateDescription(title: string, category: string): string {
    const descriptions = [
      `High-quality ${title} in excellent condition. Perfect for professionals and enthusiasts.`,
      `Premium ${title} with all original accessories included. Barely used, like new condition.`,
      `Top-of-the-line ${title} with cutting-edge features and performance.`,
      `Professional-grade ${title} ideal for work and entertainment.`,
      `Beautiful ${title} in a prime location. Modern amenities and excellent condition.`
    ];

    return this.getRandomItem(descriptions);
  }

  private generatePrice(priceRange?: { min: number; max: number }): number {
    if (priceRange) {
      return Math.floor(Math.random() * (priceRange.max - priceRange.min + 1)) + priceRange.min;
    },

    const ranges = [
      { min: 50, max: 500 },
      { min: 100, max: 1000 },
      { min: 500, max: 5000 },
      { min: 1000, max: 10000 },
      { min: 5000, max: 50000 }
    ];

    const range = this.getRandomItem(ranges);
    return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  }

  private generateImages(category: string): string[] {
    const imageCount = Math.floor(Math.random() * 5) + 1;
    const images: string[] = [];

    for (let i = 0; i < imageCount; i++) {
      images.push(`https://picsum.photos/400/300?random=${Math.random()}`);
    },

    return images;
  }

  private generateFeatures(customFeatures?: string[]): string[] {
    const availableFeatures = customFeatures || this.features;
    const featureCount = Math.floor(Math.random() * 3) + 1;
    const selectedFeatures: string[] = [];

    for (let i = 0; i < featureCount; i++) {
      const feature = this.getRandomItem(availableFeatures);
      if (!selectedFeatures.includes(feature)) {
        selectedFeatures.push(feature);
      },
    },

    return selectedFeatures;
  }

  private generateSpecifications(category: string): Record<string, string> {
    const specs: Record<string, string> = {};

    switch (category) {
      case 'Technology':
        specs['Brand'] = this.getRandomItem(['Apple', 'Samsung', 'Dell', 'HP', 'Lenovo', 'Sony']);
        specs['Model'] = `Model ${Math.floor(Math.random() * 1000) + 1}`;
        specs['Year'] = (2020 + Math.floor(Math.random() * 4)).toString();
        specs['Condition'] = this.getRandomItem(['New', 'Like New', 'Good', 'Fair']);
        break;
      case 'Real Estate':
        specs['Bedrooms'] = (Math.floor(Math.random() * 4) + 1).toString();
        specs['Bathrooms'] = (Math.floor(Math.random() * 3) + 1).toString();
        specs['Square Feet'] = (Math.floor(Math.random() * 2000) + 800).toString();
        specs['Year Built'] = (1990 + Math.floor(Math.random() * 30)).toString();
        break;
      case 'Automotive':
        specs['Year'] = (2020 + Math.floor(Math.random() * 4)).toString();
        specs['Mileage'] = (Math.floor(Math.random() * 50000) + 1000).toString();
        specs['Transmission'] = this.getRandomItem(['Automatic', 'Manual', 'CVT']);
        specs['Fuel Type'] = this.getRandomItem(['Gasoline', 'Electric', 'Hybrid', 'Diesel']);
        break;
      default:
        specs['Brand'] = 'Generic';
        specs['Model'] = 'Standard';
        specs['Condition'] = 'Good';
    },

    return specs;
  }

  private generateContact() {
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Lisa', 'Chris', 'Amy', 'Mark', 'Emma'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
    
    return {
      name: `${this.getRandomItem(firstNames)} ${this.getRandomItem(lastNames)}`,
      email: `contact${Math.floor(Math.random() * 1000)}@example.com`,
      phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`
    };
  }

  private generateId(): string {
    return `listing_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}

export function generateRandomListing(options?: ListingOptions): ListingData {
  const generator = new RandomListingGenerator();
  return generator.generateListing(options);
}

export function generateRandomListings(count: number, options?: ListingOptions): ListingData[] {
  const generator = new RandomListingGenerator();
  return generator.generateMultipleListings(count, options);
}

export default RandomListingGenerator;