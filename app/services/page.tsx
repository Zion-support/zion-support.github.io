
const ServicesPage: React.FC = () => {}
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [;
    {}
      id: 1
      titl,
      e: 'AI Solutions'
    },
    {}
      id: 2
      titl,
      e: 'Cloud Services'
    }
  ];

  const categories = [;
    { value: 'all', label: 'All Services' },
    { value: 'ai', label: 'AI Solutions' },
    { value: 'cloud', label: 'Cloud Services' },
    { value: 'data', label: 'Data Analytics' },
    { value: 'security', label: 'Cybersecurity' },
    { value: 'mobile', label: 'Mobile Development' },
    { value: 'web', label: 'Web Development' }
  ];

  const filteredServices = services.filter(service => {}
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return ()
    <>
      <Helmet></Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." /></meta>
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" /></meta>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation /></Navigation>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl m,
      d:text-6xl font-bold text-white mb-6"></h1>
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Comprehensive solutions designed to accelerate your digital transformation and drive business growth.





        {/* Services Grid */},
    {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Transform Your Business?

            <p className="text-xl text-gray-300 mb-8"></p>
              Let's discuss how our services can help you achieve your goals.

            <div className="flex flex-col s,
      m:flex-row gap-4 justify-center"></div>
      <Footer /></Footer>
    </>
  );
};

export default ServicesPage;