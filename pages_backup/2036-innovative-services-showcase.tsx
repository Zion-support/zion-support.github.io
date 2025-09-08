


    

  const [sortBy, setSortBy] = useState<
    'name' | 'price' | 'rating' | 'marketSize'

  >('name');





      {/* Contact Information */}
      <section className='py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>;
        <div className='max-w-6xl mx-auto'>;
          <motion&& motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'            initial={{ opacity: 0, y: 20 }}



            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>;
              <Phone className='w-8 h-8 mx-auto mb-4 text-cyan-400' />;
              <h3 className='text-lg font-semibold mb-2'>Phone</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.mobile}</p>;
            </div>;
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>;
              <Mail className='w-8 h-8 mx-auto mb-4 text-cyan-400' />;
              <h3 className='text-lg font-semibold mb-2'>Email</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.email}</p>;
            </div>;
            <div className='text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300'>;
              <MapPin className='w-8 h-8 mx-auto mb-4 text-cyan-400' />;
              <h3 className='text-lg font-semibold mb-2'>Address</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.address}</p>            </div>;
          </motion && motion.div>;
        </div>;
      </section>;






      {/* Services Section */}
      <section className='py-20 px-4'>;
        <div className='max-w-7xl mx-auto'>;
          {/* Section Header */}
          <motion&& motion.div
            className='text-center mb-16'            initial={{ opacity: 0, y: 20 }}

      {/* Contact Information */}
      <section className='py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8'            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
      {/* Contact Information */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
      {/* Services Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div
            className='text-center mb-16'            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
      {/* Services Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.6 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Revolutionary Services
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Discover our comprehensive portfolio of innovative micro SAAS
              services, AI platforms, and cutting-edge technology solutions
              designed for the future.            </p>










                key={service.id}
                variants={item_variants}
                className={`bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 border border - gray - 700 rounded - xl p - 6 hover:border - cyan - 400 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 ${
                  view_mode === 'list' ? 'flex gap - 6' : '';
                }`}
              >;
                {view_mode === 'list' && (
                  <div className='flex - shrink - 0'>;
                    <div className='w - 16 h - 16 bg - gradient - to - br from - cyan - 500 to - blue - 600 rounded - lg flex items - center justify - center text - 2xl'>;
                      {category_icons[service.category] || (
                        <Star className='w - 8 h - 8' />)}
                    </div>;
                  </div>)}
                <div className='flex - 1'>;
                  {/* Service Header */}
                  <div className='mb - 4'>;
                    <div className='flex items - start justify - between mb - 2'>;
                      <h3 className='text - xl font - bold text - white mb - 2'>;
                        {service.name}
                      </h3>;
                      <div className='flex items - center gap - 2'>;
                        <span className='text - cyan - 400 font - semibold'>;
                          {service.price}
                        </span>;
                        {service.period && (
                          <span className='text - gray - 400 text - sm'>;
                            {service.period}
                          </span>)}
                      </div>;
                    </div>;
                    <p className='text - cyan - 400 font - medium mb - 2'>;
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>}
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>}
                        {service.period && <span className="text-gray-400 text-sm">{service.period}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}





                    <div className='flex items - center justify - between'>;
                      <span className='px - 3 py - 1 bg - gray - 800 text - cyan - 400 text - sm rounded - full border border - gray - 700'>;
                        {service.category}
                      </span>;
                      {service.rating && (












      {/* Call to Action */}

      <section className='py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.6 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>;
              Join the future of technology with our innovative services.;
              Contact us today to discuss how we can help you achieve your;
              goals.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <a
                href={`mailto:${contactInfo && contactInfo.email}`}
                className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25'>;
                Get Started Today;
              </a>;
              <a

          <motion.div







              Join the future of technology with our innovative services.

                href={`mailto:${contactInfo.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"






)
}
),

};
const itemVariants = {

  hidden: {
  y: 20, opacity: 0
}
visible: {
  y: 0, opacity: 1, transition: {
  duration: 0.5
}
}%`;
top: `$ {
  Math.random () * 100
}%`
}animate= {
  {
  y: [0, -100, 0], opacity: [0.3, 1, 0.3]
}transition= {
  {
  duration: 3 + Math.random () * 2, repeat: Infinity, delay: Math.random () * 2
}/>) )
}</div> <div className="relative z-10 text-center max-w-6xl mx-auto" > <motion.h1 > 2036 Innovative Services </motion.h1> <motion.p > Experience the future of technology with our cutting-edge micro SAAS services;
AI platforms, and quantum solutions. Transform your business with next-generation innovation. </motion.p> <motion.div > <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25" > Explore Services </button> <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105" > Contact Us </button> </motion.div> </div> </section> </div> </motion.div> </div> </section> > <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" > Revolutionary Services </h2> <p className="text-xl text-gray-300 max-w-3xl mx-auto" > Discover our comprehensive portfolio of innovative micro SAAS services
AI platforms, and cutting-edge technology solutions designed for the future. </p> </motion.div> {
  /* Filters and Controls */
}<motion.div /> </div> <div className="flex gap-4 items-center" > <select > <option value="name" >Sort by Name</option> <option value="price" >Sort by Price</option> <option value="rating" >Sort by Rating</option> <option value="marketSize" >Sort by Market Size</option> </select> <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1" > <button onClick= {
  () => setViewMode ('grid')
}className= {
  `p-2 rounded $ {
  viewMode === 'grid'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white'
}`
}> <Grid className="w-5 h-5" /> </button> <button onClick= {
  () => setViewMode ('list')
}className= {
  `p-2 rounded $ {
  viewMode === 'list'? 'bg-cyan-500 text-black': 'text-gray-400 hover:text-white'
}`
}> <List className="w-5 h-5" /> </button> </div> </div> </div> key= {
  category
}onClick= {
  () => setSelectedCategory (category)
}className= {
  `px-4 py-2 rounded-lg border transition-all duration-300 flex items-center gap-2 $ {
  selectedCategory === category ? 'bg-cyan-500 text-black border-cyan-500': 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-cyan-400 hover:text-cyan-400'
}`
}> </button>) )
}</div> </motion.div> {
  /* Services Grid */
}<motion.div > {
  sortedServices.map ( (service, index) => (<motion.div key= {
  service.id

                href={`tel:${contactInfo && contactInfo.mobile}`}


  {



  once: true;
}> <h2 className="text - 3xl md:text - 4xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 to - blue - 500 bg - clip - text text - transparent" > Ready to Transform Your Business? </h2> <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto" > Join the future of technology with our innovative services. Contact us today to discuss how we can help you achieve your goals. </p> <div className="flex flex - col sm:flex - row gap - 4 justify - center" > <a > Get Started Today </Link> <a;





