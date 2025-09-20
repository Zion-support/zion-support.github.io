import React, { useState } from 'react',
import { motion  } from 'framer-motion',

export default function Page() {
,
  {
    name: "Sensor Fusion",
    description: "Integration of multiple sensor data sources",
    icon: Activity,
    useCase: "Environmental Awareness",
    reliability: "Critical"
  },
  {
    name: "Robotics Control",
    description: "Advanced control systems for autonomous movement",
    icon: Cpu,
    useCase: "Physical Control",
    reliability: "Critical"

],

const successStories = [{
    id: 1,
    comp: "Automotive Manufacturer",
    industry: "Automotive",
    challenge: "Needed autonomous driving system for next - generation vehicles",
    solution: "Built comprehensive autonomous system with computer vision, sensor fusion, and AI decision making",
    results: "Level 4 autonomy achieved, 99.9% safety record, reduced accidents by 80%, improved efficiency",
    logo: "AM"
  },
  {
    id: 2,
    comp: "Manufacturing Corporation",
    industry: "Manufacturing",
    challenge: "Required autonomous robots for 24 / 7 production line operation",
    solution: "Implemented AI - powered industrial robots with computer vision and safety systems",
    results: "100% uptime, 50% production increase, improved quality, reduced costs",
    logo: "MC"
  },
  {
    id: 3,
    comp: "Agricultural Cooperative",
    industry: "Agriculture",
    challenge: "Needed autonomous farming system for large - scale crop management",
    solution: "Built autonomous agricultural robots with precision farming capabilities",
    results: "30% yield increase, 40% water savings, reduced labor costs, improved sustainability",
    logo: "AC"

],

const processSteps = [{
    step: 1,
    title: "System Requirements",
    description: "Define autonomous system requirements and constraints",
    icon: FileText,
    duration: "2 - 4 weeks"
  },
  {
    step: 2,
    title: "AI Development",
    description: "Develop AI algorithms and machine learning models",
    icon: Code,
    duration: "8 - 16 weeks"
  },
  {
    step: 3,
    title: "Hardware Integration",
    description: "Integrate sensors, actuators, and control systems",
    icon: Wrench,
    duration: "12 - 24 weeks"
  },
  {
    step: 4,
    title: "Testing & Validation",
    description: "Comprehensive testing and safety validation",
    icon: Shield,
    duration: "8 - 16 weeks"

],

const autonomousBenefits = [{
    title: "Increased Efficiency",
    description: "24 / 7 operation with consistent performance and reduced human error",
    icon: Zap,
    examples["24 / 7 operation", "Consistent performance", "Reduced errors", "Faster processing"],
  },
  {
    title: "Enhanced Safety",
    description: "Advanced safety systems and risk mitigation capabilities",
    icon: Shield,
    examples["Risk mitigation", "Safety protocols", "Emergency systems", "Predictive safety"],
  },
  {
    title: "Cost Reduction",
    description: "Lower operational costs and improved resource utilization",
    icon: TrendingUp,
    examples["Lower labor costs", "Resource optimization", "Reduced waste", "Improved ROI"],
  },
  {
    title: "Scalability",
    description: "Systems that can scale and adapt to changing requirements",
    icon: Rocket,
    examples["Easy scaling", "Adaptive systems", "Modular design", "Future - proof technology"],
  }
],

  const [selectedCategory, setSelectedCategory] = useState('All'),
  const [selectedSolution, setSelectedSolution] = useState(null),

  const categories = ['AllVehicles', 'RoboticsDrones', 'Smart HomeAgriculture', 'Medical'],

  const filteredSolutions = selectedCategory === 'All'
    ? autonomousSystemsSolutions
    : autonomousSystemsSolutions.filter(solution => solution.category === selectedCategory) ,

  return (<div className="min - h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt - 32 pb - 20 overflow-hidden">
        <div className="absolute inset - 0 bg-gradient - to - br from - zion - cyan / 20 via - zion - purple / 20 to - zion -blue / 20"></div>
        <div className="absolute inset -0">
          <div className="absolute top - 20 left - 20 w-72 h-72 bg-zion - cyan / 30 rounded-full blur -3xl"></div>
          <div className="absolute bottom - 20 right - 20 w-96 h-96 bg-zion - purple / 30 rounded-full blur -3xl"></div>
        </div>

        <div className="container - responsive relative z -10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            animate = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center max - w-4xl mx -auto"

            <motion.div
              initial = {
  { opacity: 0,
  scale: 0.8

}}
              animate = {
  { opacity: 1,
  scale: 1

}}
              transition = {
  { duration: 0.8,
  delay: 0.2

}}
              className="inline - flex items - center justify - center w-20 h-20 bg-gradient - to - br from - zion - cyan to - zion - purple rounded-2xl mb-8"

              <Cpu className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font - bold text-white mb-6">
              AI Autonomous &
              <span className="text-gradient block">Robotic Systems</span>
            </h1>

            <p className="text-xl text-zion - slate - light leading - relaxed mb-8">
              Build the future with intelligent autonomous systems.From self - driving vehicles to
              industrial robots, we help you create AI - powered solutions that operate independently.</p>

            <div className="flex flex - wrap justify - center gap-4 text-sm">
              <div className="flex items - center gap-2 text-zion -cyan">
                <Brain className="w-4 h-4" />
                <span > AI Intelligence</span>
              </div>
              <div className="flex items - center gap-2 text-zion -purple">
                <Eye className="w-4 h-4" />
                <span > Computer Vision</span>
              </div>
              <div className="flex items - center gap-2 text-zion -blue">
                <Shield className="w-4 h-4" />
                <span > Safety & Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>,

      {/* Autonomous Systems Benefits */}
      <section className="py-20 bg-zion - blue -dark / 50">,
        <div className="container -responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-4">Autonomous Systems Benefits</h2>
            <p className="text-xl text-zion - slate - light max - w-3xl mx -auto">
              Understanding the fundamental advantages that make autonomous systems essential
            </p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-8">
            {autonomousBenefits.map ( (benefit, index) => (<motion.div
                key={benefit.title}
                initial = {
  { opacity: 0,
  y: 30

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="bg-zion - blue - dark / 30 border border-zion - cyan / 20 rounded-2xl p - 8 hover:border-zion - cyan / 40 transition - all duration -300"

                <div className="w-16 h-16 bg-gradient - to - br from - zion - cyan to - zion - purple rounded-2xl flex items - center justify - center mx - auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font - bold text-white mb-4 text-center">{benefit.title}</h3>
                <p className="text-zion - slate - light mb-6 leading - relaxed text-center">{benefit.description}</p>

                <div className="space - y-2">
                  <h4 className="text-zion - cyan font - semibold mb-3">Examples:</h4>
                  {benefit.examples.map((example, exampleIndex) => (<div key={exampleIndex} className="flex items - center gap-3">
                      <CheckCircle className="w-4 h-4 text-zion - cyan flex - shrink -0" />
                      <span className="text-zion - slate - light text-sm">{example}</span>
                    </div>) ) }
                </div>
              </motion.div>,) ) }
          </div>
        </div>
      </section>

      {/* Autonomous Technologies */}
      <section className="py-20">,
        <div className="container -responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-4">Autonomous Technologies We Support</h2>
            <p className="text-xl text-zion - slate - light max - w-3xl mx -auto">
              Comprehensive support for leading autonomous and robotics platforms
            </p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">
            {autonomousTechnologies.map((technology, index) => (<motion.div
                key={technology.name}
                initial = {
  { opacity: 0,
  y: 30

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="bg-zion - blue - dark / 30 border border-zion - cyan / 20 rounded-2xl p - 6 text-center hover:border-zion - cyan / 40 transition - all duration -300"

                <div className="w-16 h-16 bg-gradient - to - br from - zion - cyan to - zion - purple rounded-2xl flex items - center justify - center mx - auto mb-6">
                  <technology.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font - bold text-white mb-3">{technology.name}</h3>
                <p className="text-zion - slate - light mb-4 leading -relaxed">{technology.description}</p>
                <p className="text-zion - cyan font - semibold mb-2">{technology.useCase}</p>

                <span className={`inline - block px-3 py-1 rounded-full text-sm font - semibold ${technology.reliability === 'Critical'
                    ? 'bg-red - 500 / 20 text-red - 400 border border-red - 500 / 30'
                    : technology.reliability === 'High'
                    ? 'bg-yellow-500 / 20 text-yellow-400 border border-yellow-500 / 30'
                    : 'bg-green - 500 / 20 text-green - 400 border border-green - 500 / 30'
                }`}>
                  {technology.reliability} Reliability
                </span>
              </motion.div>,) ) }
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-zion - blue -dark / 50">,
        <div className="container -responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-4">Our Autonomous Systems Development Process</h2>
            <p className="text-xl text-zion - slate - light max - w-3xl mx -auto">
              A proven methodology that ensures successful autonomous system development
            </p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">
            {processSteps.map((step, index) => (<motion.div
                key={step.step}
                initial = {
  { opacity: 0,
  y: 30

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="text-center"

                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient - to - br from - zion - cyan to - zion - purple rounded-2xl flex items - center justify - center mx -auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute - top - 2 -right - 2 w-8 h-8 bg-zion - blue rounded-full flex items - center justify - center text-white text-sm font -bold">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font - bold text-white mb-3">{step.title}</h3>
                <p className="text-zion - slate - light mb-4 leading -relaxed">{step.description}</p>
                <span className="inline - block px-3 py-1 bg-zion - cyan / 20 text-zion - cyan text-sm rounded-full border border-zion -cyan / 30">
                  {step.duration}
                </span>
              </motion.div>,) ) }
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">,
        <div className="container -responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-4">Autonomous Systems Solutions</h2>
            <p className="text-xl text-zion - slate - light max - w-3xl mx -auto">
              Comprehensive solutions designed for modern autonomous systems
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex - wrap justify - center gap-4 mb-12">
            {categories.map((category) => (<button
                key={category}
                onClick={ () => setSelectedCategory(category) }
                className={`px-6 py-3 rounded-xl font - semibold transition - all duration - 300 ${selectedCategory === category
                    ? 'bg-gradient - to - r from - zion - cyan to - zion - purple text-white shadow-lg shadow-zion - cyan / 25'
                    : 'bg-zion - blue - dark / 30 text-zion - slate - light border border-zion - cyan / 20 hover:border-zion - cyan / 40'
                }`}

                {category}
              </button>) ) }
          </div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">
            {filteredSolutions.map((solution, index) => (<motion.div
                key={solution.id}
                initial = {
  { opacity: 0,
  y: 30

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="bg-zion - blue - dark / 30 border border-zion - cyan / 20 rounded-2xl p - 6 hover:border-zion - cyan / 40 transition - all duration - 300 cursor -pointer"
                onClick={ () => setSelectedSolution(solution) }

                <div className="w-16 h-16 bg-gradient - to - br from - zion - cyan to - zion - purple rounded-2xl flex items - center justify - center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font - bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion - slate - light mb-6 leading -relaxed">{solution.description}</p>

                <div className="space - y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (<div key={featureIndex} className="flex items - center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion - cyan flex - shrink -0" />
                      <span className="text-zion - slate - light text-sm">{feature}</span>
                    </div>) ) }
                </div>

                <div className="flex flex - wrap gap-2 mb-4">
                  {solution.technologies.slice(0, 2) .map((tech, techIndex) => (<span
                      key={techIndex}
                      className="px-2 py-1 bg-zion - purple / 20 text-zion - purple text-xs rounded border border-zion -purple / 30"

                      {tech}
                    </span>) ) }
                </div>

                <div className="flex items - center justify - between mb-4">
                  <span className="text-zion - cyan font -semibold">{solution.price}</span>
                  <span className="text-zion - slate - light text-sm">{solution.timeline}</span>
                </div>

                <div className="flex items - center justify -between">
                  <span className="px-3 py-1 bg-zion - cyan / 20 text-zion - cyan text-xs rounded-full border border-zion -cyan / 30">
                    {solution.category}
                  </span>
                  <button className="inline - flex items - center gap-2 text-zion - cyan hover:text-white transition - colors duration -300">
                    <span className="text-sm font -medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-zion - blue -dark / 50">,
        <div className="container -responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-4">Autonomous Systems Success Stories</h2>
            <p className="text-xl text-zion - slate - light max - w-3xl mx -auto">
              Organizations that have transformed their operations with autonomous systems
            </p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">
            {successStories.map((story, index) => (<motion.div
                key={story.id}
                initial = {
  { opacity: 0,
  y: 30

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="bg-zion - blue - dark / 30 border border-zion - cyan / 20 rounded-2xl p - 6 hover:border-zion - cyan / 40 transition - all duration -300"

                <div className="flex items - center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient - to - br from - zion - cyan to - zion - purple rounded-xl flex items - center justify - center text-white font - bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font - bold text-white">{story.comp}</h3>
                    <p className="text-zion - slate - light text-sm">{story.industry}</p>
                  </div>
                </div>

                <div className="space - y-4 mb-6">
                  <div>
                    <h4 className="text-zion - cyan font - semibold mb-2">Challenge</h4>
                    <p className="text-zion - slate - light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion - cyan font - semibold mb-2">Solution</h4>
                    <p className="text-zion - slate - light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion - cyan font - semibold mb-2">Results</h4>
                    <p className="text-zion - slate - light text-sm">{story.results}</p>
                  </div>
                </div>

                <div className="flex items - center gap-2">
                  {[...Array(5) ].map((_, i) => (<Star key={i} className="w-4 h-4 text-yellow-400 fill -current" />) ) }
                  <span className="text-zion - slate - light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>,) ) }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient - to - r from - zion - cyan / 10 via - zion - purple / 10 to - zion -blue / 10">,
        <div className="container -responsive">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center max - w-4xl mx -auto"

            <h2 className="text-4xl font - bold text-white mb-6">Ready to Build Autonomous Systems?</h2>
            <p className="text-xl text-zion - slate - light mb-8 leading -relaxed">
              Let's discuss how autonomous systems can transform your operations,
              improve efficiency, and create new possibilities through AI and robotics.</p>

            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient - to - r from - zion - cyan to - zion - purple text-white font - semibold rounded-xl hover:shadow-lg hover:shadow-zion - cyan / 25 transition - all duration - 300 transform hover:scale -105"

                Start Autonomous Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion - cyan text-zion - cyan font - semibold rounded-xl hover:bg-zion - cyan hover:text-white transition - all duration -300"

                Autonomous Systems Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>) }
