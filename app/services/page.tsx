import React from 'react'
const ServicesPage: React.FC = () => {
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    
      title: 'Cloud Services',} ]
  const categories = [
    {value: 'all', label: 'All Services'} ,
    {value: 'ai', label: 'AI Solutions'} ,
    {value: 'cloud', label: 'Cloud Services'} ,
    {value: 'data', label: 'Data Analytics'} ,
    {value: 'security', label: 'Cybersecurity'} ,
    {value: 'mobile', label: 'Mobile Development'} ,
    {value: 'web', label: 'Web Development'} ]
  const filteredServices = services.filter(service => 
    return matchesSearch && matchesCategory;} )
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
<Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
  );
}  </div>
    </main>


export default ServicesPage;