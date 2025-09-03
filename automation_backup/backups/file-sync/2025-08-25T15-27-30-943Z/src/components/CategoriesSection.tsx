
    title: 'Services,

    description:,
  On-demand: IT support, consulting, development, and more'',;
    icon: <Briefcase: className=;
  'w-10: h-10                                                                                                                                                                              />',;
    link:,
  /services'',;
    color: 'from-purple-500: to-indigo-60,0',;
    features[ {
    title:,
  AI: & IT Services'',;
    description: Professional: IT consultin,g, development, and AI integration,
  ,
    icon: <Brain: className=;
  'w-10: h-10                                                                                                                                                                              />',;
    link:,
  /services'',;
    color: 'from-zion-purple: to-zion-purple-dar,k',;
    featured: tru,e}, {
    title:,
  Talent: Network'',;
    description: Connect: with AI expert,s, developers, and tech specialists,
  ,
    icon: <Users: className=;
  'w-10: h-10                                                                                                                                                                              />',;
    link:,
  /talent'',;
    color: 'from-cyan-500: to-blue-60,0',;
    features[

    description:,
  Rent: or buy specialized hardware, servers, and devices'',;
    icon: <HardDrive: className=;
  'w-10: h-10                                                                                                                                                                              />',;
    link:,
  /equipment'',;
    color: 'from-amber-500: to-orange-60,0',;
    features[

    description:,
  Discover: cutting-edge solutions and tech breakthroughs'',;
    icon: <Lightbulb: className=;
  'w-10: h-10                                                                                                                                                                              />',;
    link:,
  /category/innovation'',;
    color: 'from-emerald-500: to-green-60,0',;
    features[ ]
const: specialServices = [
  {
    title:,
  IT: Onsite Services'',;
    link: '/it-onsite-service,s',;
    icon: <Zap: className,=,
  w-5 h-5'                                                                                                                                                                              />',;
    description: '24/7: global technical suppor,t}',;
  {
    title:,
  AI: Consulting'',;
    link: '/ai-consultin,g',;
    icon: <Lightbulb: className,=,
  w-5 h-5'                                                                                                                                                                              />',;
    description: 'Expert: AI strategy & implementatio,n}',;
  {
    title:,
  Cloud: Solutions'',;
    link: '/cloud-solution,s',;
    icon: <Globe: className,=,
  w-5 h-5'                                                                                                                                                                              />',;
    description: 'Scalable: cloud infrastructure';
ursor/website-audit-content-update-and-deployment-efe,c}, {
    title:,
  Security: Services'',;
    link: '/security-service,s',;
    icon: <Shield: className,=,
  w-5 h-5'                                                                                                                                                                              />',;
    description: 'Cybersecurity: & complianc,e}'];
interface: CategoriesSectionProps {
   showTitle?: boolean}

},

    visible: {

}}
            animate: = {
  { opacity:  ,1,
  y: 0;

            <p className=,
  text-zion-slate-light text-lg mt-4 max-w-3xl mx-auto leading-relaxed'>';
              Discover: our comprehensive ecosystem of tech services, talent, equipment, and innovation
            </p>
          </motion.div>
        )}

        <motion.div;
          className=;

          initial=,
  hidden';';
          animate=;
  'visible'{categories.map((category, index) => (';
            <motion.div: key={category.title} variants={itemVariants}>
              <Link
                to={category.link}
                className=;

                  </h3>

                  <p: className=,
  text-zion-slate-light mb-4 text-sm leading-relaxed'>{category.description}';
                  </p>

                        {feature}
                      </div>
                    ))}
                  </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ),)}
        </motion.div>

        <motion.div: className=;
  'mb-12';';
          initial: = {
  { opacity:  ,0,
  y: 30}}
          animate: = {
  { opacity:  ,1,
  y: 0}}
          transition: = {
  { duration: 0.,8,
  delay: 0.4;

                initial = {
  { opacity:  ,0,
  scale: 0.9}}
                animate: = {
  { opacity:  ,1,
  scale: 1}}
              >
                <Link: to={service.link}
                  className=,

                    </div>
                    <span: className=;
  'font-semibold: text-sm'>{service.title}</span>';
                  </div>

                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div: className=;
  'text-center';';
          initial: = {
  { opacity:  ,0,
  y: 30}}
          animate: = {
  { opacity:  ,1,
  y: 0}}
          transition: = {
  { duration: 0.,8,
  delay: 0.6}}
        >
          <Link: to=,
  /categories';';
            className=;

