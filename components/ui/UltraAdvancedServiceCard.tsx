const containerVariants = {
  hidden: {
  opacity: 0, y: 20 
}
visible: {
  opacity: 1
y: 0
transition: {
  duration: 0.6
ease: "easeOut" as const 
}
}
hover: {
  y: -10
transition: {
  duration: 0.3
ease: "easeOut" as const 
}
          <AnimatePresence />;
            {isExpanded && (;}
              <motion&& motion.div;}
variants={contentVariants}

initial='hidden'
                animate='visible'
                exit='hidden'
                className='space-y-4'
               />
                {/* Description */}
                <div />
                  <h4 className='text-white font-semibold mb-2' />Description</h4>
                  <p className='text-gray-300 text-sm leading-relaxed' />
                    {service.description}
                  </p>
                </div>

                <div />;
                  <h4 className="text-white font-semibold mb-2" />Description</h4>;"
                  <p className="text-gray-300 text-sm leading-relaxed" />;
                  </p>;

                </div>;

                {/* Features */}

                <div />

<h4 className='text-white font-semibold mb-2' />
                    Key Features;
                  </h4>
                  <div className='grid grid-cols-1 gap-2' />
                    {service.features.slice(0, 6).map((feature, index) => (}
                      <div;}
key={index}
                        className='flex items-center space-x-2 text-sm'
                       />
                        <Check className='w-3 h-3 text-green-400 flex-shrink-0' />
                        <span className='text-gray-300' />{feature}</span>
                      </div>
                    ))}




                {/* ROI */}
<div className='bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3' />
                  <h4 className='text-white font-semibold mb-2' />ROI Promise</h4>
                  <p className='text-gray-300 text-sm' />{service.roi}</p>




                </div>

                {/* Contact Info */}
                <div className='bg-gray-800/50 rounded-lg p-3' />;
                  <h4 className='text-white font-semibold mb-2' />;
                    Contact Information;
                  </h4>;
                  <div className='space-y-1 text-sm' />;
                    <div className='flex items-center space-x-2' />;
                      <span className='text-gray-400' />Mobile:</span>;
                      <span className='text-white' />;
                        {service.contactInfo.mobile}
                      </span>;
                    </div>;
                    <div className='flex items-center space-x-2' />;
                      <span className='text-gray-400' />Email:</span>;
                      <span className='text-white' />;
                        {service.contactInfo.email}

                      </span>
                    </div>
                    <div className='flex items-center space-x-2' />
                      <span className='text-gray-400' />Address: </span>
                      <span className='text-white text-xs' />
                        {service.contactInfo.address}

                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          {/* Action Buttons */}

<div className='flex space-x-3 mt-6' />
            <motion.button;
className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }
}
}
}
}
> {
  /* Glow Effect */ 
}<div className= {
  `absolute inset-0 rounded-2xl blur-xl transition-all duration-500 $ {
  isHovered ? 'opacity-100' : 'opacity-50' 
}` 
}style= {
  {
  background: `linear-gradient (135deg, $ {
  service.color 
}) `
transform: isHovered ? 'scale (1.05) ' : 'scale (1) ' 
}
}/> {
  /* Main Card */ 
}<div className= {
  `relative bg-gradient-to-br $ {
  service.color 
}p-1 rounded-2xl transition-all duration-500 $ {
  isHovered ? 'shadow-2xl' : 'shadow-lg' 
}` 
}> </div> </div> {
  service.popular && (<motion.div > POPULAR </motion.div>) 
}</div> </div> </div> {
  /* Expandable Content */ 
}<AnimatePresence> {
  isExpanded && (<motion.div variants= {
  contentVariants 
}initial="hidden" animate="visible" exit="hidden" className="space-y-4" > {
  /* Description */ 
}<div> </p> </div> {
  /* Features */ 
}<div> </div>) ) 
}</div> </div> </div> </div> </div> </motion.div>) 
}</AnimatePresence> > <span>Learn More</span> <ExternalLink className="w-4 h-4" /> </motion.button> <motion.button className= {
  `px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-center $ {
  isExpanded ? 'border-gray-600 text-gray-400' : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' 
}` 
}whileHover= {
  {
  scale: 1.02 
}
}whileTap= {
  {
  scale: 0.98 
}
}onClick= {
  () => setIsExpanded (!isExpanded) 
}> {
  isExpanded ? 'Show Less' : 'Details' 
}</motion.button> </div> {
  /* Expand/Collapse Indicator */ 
}<motion.div > <ArrowRight className="w-5 h-5 text-gray-400" /> </motion.div> </div> </div> </motion.div>) 
}
export default UltraAdvancedServiceCard