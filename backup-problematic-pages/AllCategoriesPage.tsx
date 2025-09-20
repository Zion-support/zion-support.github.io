import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading
            level='h1'
            className='text-4xl font-bold'
          >
            Explore All Categories
          </GradientHeading>
          <p className='text-lg text-zion-blue-light mt-4'>
            Discover a wide range of services and solutions tailored to your needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {categories.map((category, index) => (
            <Link href={`/categories/${category.slug}`} key={index}>
              <Card className='bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1'>
                <CardContent className='flex flex-col items-center text-center p-6'>
                  <div className='text-zion-purple mb-4'>
                    {category.icon}
                  </div>
                  <h3 className='text-xl font-semibold mb-2'>{category.name}</h3>
                  <p className='text-gray-600 dark:text-gray-300 text-sm'>{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    name: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Advanced AI models, machine learning algorithms, and data science solutions.',
    icon: <Lightbulb size={48} />,
  },
  {
    name: 'Cloud & DevOps',
    slug: 'cloud-devops',
    description: 'Cloud infrastructure, DevOps automation, and scalable computing solutions.',
    icon: <HardDrive size={48} />,
  },
  {
    name: 'IT Consulting',
    slug: 'it-consulting',
    description: 'Expert IT strategy, digital transformation, and technology advisory services.',
    icon: <Briefcase size={48} />,
  },
  {
    name: 'Managed Services',
    slug: 'managed-services',
    description: 'Proactive IT management, network monitoring, and cybersecurity services.',
    icon: <Users size={48} />,
  },
  // Add more categories as needed
];