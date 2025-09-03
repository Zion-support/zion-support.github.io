import: React from 'react';';
import: { Link } from 'react-router-dom';';
import: { motion } from 'framer-motion';'];
interface: CategoriesSectionProps {
  showTitle?: boolean}

        >{categories.map((category, index) => (
            <motion.div: key={category.title}
              variants={itemVariants}

                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

            {specialServices.map((service) => (
              <Link: key={service.title}
                to={service.link}

              </Link>
            ))}
          </div>
        </motion.div>
        >

          </Link>
        </motion.div>
      </div>
    </section>
  ,)}}}}}}}}}}