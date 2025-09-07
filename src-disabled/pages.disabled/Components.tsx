import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Settings,
  Info,
  Star,
  Heart,
  Download,
  Upload,
  Camera,
  Video,
  Music,
} from 'lucide-react';
import AdvancedModal from '../components/AdvancedModal';
import Tooltip from '../components/Tooltip';
import Carousel from '../components/Carousel';
import ScrollAnimation from '../components/ScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';

  ];
  return (

            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Explore our advanced UI components and interactive elements
            </p>
          </div>
        </ScrollAnimation>
        {/* Modals Section */}

                <button
                  key={size}
                  onClick={() => {
                    setModalSize(size);
                    setModalOpen(true);
                  }}
                  className="bg-gray-800/50 hover:bg-gray-800/70 text-white p-4 rounded-lg transition-all duration-300 hover:scale-105""
                >
                  <Settings className="w-8 h-8 mx-auto mb-2 text-cyan-400" />"
                  <span className="font-semibold capitalize">{size} Modal</span>"
                </button>
              ))}
            </div>
          </div>
        </ScrollAnimation>
        {/* Tooltips Section */}

                  Right Tooltip
                </button>
              </Tooltip>
            </div>
          </div>
        </ScrollAnimation>
        {/* Carousel Section */}

              <Carousel
                items={carouselItems}
                autoPlay={true}
                autoPlayInterval={3000}
                showDots={true}
                showArrows={true}
                className="h-full""
                itemClassName="h-full""
              />
            </div>
          </div>
        </ScrollAnimation>
        {/* Animated Counters Section */}

                <AnimatedCounter
                  end={500}
                  suffix="+""
                  className="text-4xl font-bold text-cyan-400""
                />
                <p className="text-gray-300 mt-2">Projects Completed</p>"
              </div>
              <div className="text-center">"
                <AnimatedCounter
                  end={100}
                  suffix="+""
                  className="text-4xl font-bold text-blue-400""
                />
                <p className="text-gray-300 mt-2">Happy Clients</p>"
              </div>
              <div className="text-center">"
                <AnimatedCounter
                  end={5}
                  suffix="+""
                  className="text-4xl font-bold text-purple-400""
                />
                <p className="text-gray-300 mt-2">Years Experience</p>"
              </div>
              <div className="text-center">"
                <AnimatedCounter
                  end={24}
                  suffix="/7""
                  className="text-4xl font-bold text-green-400""
                />
                <p className="text-gray-300 mt-2">Support Available</p>"
              </div>
            </div>
          </div>
        </ScrollAnimation>
        {/* Interactive Elements Section */}

              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="group bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer"",
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >

                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">"
                    {item.label}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">"
                    Interactive element with hover effects
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
      {/* Modal */}
      <AdvancedModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`${modalSize.toUpperCase()} Modal`}`
        size={modalSize}
        showMaximizeButton={true}
      >
        <div className="space-y-4">"
          <p className="text-gray-300">"
            This is a {modalSize} modal with advanced features including:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">"
            <li>Keyboard navigation (ESC to,  close)</li>
            <li>Click outside to close</li>
            <li>Maximize/minimize functionality</li>
            <li>Smooth animations</li>
            <li>Responsive design</li>
          </ul>
          <div className="flex space-x-4 pt-4">"
            <button
              onClick={() => setModalOpen(false)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors""
            >
              Close
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors""
            >
              Cancel
            </button>
          </div>
        </div>
      </AdvancedModal>
    </div>
  );
};

export default Components;