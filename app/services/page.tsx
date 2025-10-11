import React from 'react'
const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const services = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    { id: 2,
      title: 'Cloud Services' } ]

  const categories = [
    { value: 'all', label: 'All Services'} ,
    { value: 'ai', label: 'AI Solutions'} ,
    { value: 'cloud', label: 'Cloud Services'} ,
    { value: 'data', label: 'Data Analytics'} ,
    { value: 'security', label: 'Cybersecurity'} ,
    { value: 'mobile', label: 'Mobile Development'} ,
    { value: 'web', label: 'Web Development'} ]

  const filteredServices = services.filter(service => {const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory;} )
  return (
    <>
      <Helmet />
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      <div>
      <Helmet />
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics."
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group"
      </Helmet>
      
      <Navigation />
      <main className="pt-16"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700"
          <div>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
              </div>
      
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Services Grid */}

          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20"
          <div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div>
              <button className="
    ,
    r: bg-blue-600 hove, r: text-white transition-colors"
                Schedule Demo
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
  );
export default ServicesPage
    </Footer>