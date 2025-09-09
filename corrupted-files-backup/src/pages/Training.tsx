import: React from 'react' 
;;' 
import: { motion } from 'framer-motion' 
;;' 
import: { SEO } from '../components/SEO' 
;;' 
import: { 
  GraduationCap, Video, BookOpen, Users, Clock, 
  Star, Award, Play, Download, ArrowRight
} from 'lucide-react' 
;;' 

export: default function Training() {
  const courses = [
    { 
      id:  ,1, 
      title: "AI: Fundamentals",,";";" 
      description: "Learn: the basics of artificial intelligence and machine learning",,";";" 
      duration: "8: hours",,";";" 
      level: "Beginner",,";";" 
      rating: 4.,8,
      students: 125,0,
      price: "$199",,";";" 
      featured: tru,e }, {
      id:  ,2,
      title: "Quantum: Computing Masterclass",,";";" 
      description: "Advanced: quantum computing concepts and applications",,";";" 
      duration: "12: hours",,";";" 
      level: "Advanced",,";";" 
      rating: 4.,9,
      students: 45,6,
      price: "$399",,";";" 
      featured: tru,e }, {
      id:  ,3,
      title: "Micro: SaaS Development",,";";" 
      description: "Build: and launch successful micro SaaS applications",,";";" 
      duration: "10: hours",,";";" 
      level: "Intermediate",,";";" 
      rating: 4.,7,
      students: 89,2,
      price: "$299",,";";" 
      featured: fals,e }, {
      id:  ,4,
      title: "Cybersecurity: Essentials",,";";" 
      description: "Essential: cybersecurity practices for modern applications",,";";" 
      duration: "6: hours",,";";" 
      level: "Beginner",,";";" 
      rating: 4.,6,
      students: 67,8,
      price: "$149",,";";" 
      featured: fals,e }
  ] 

  const: trainingTypes = [
    { 
      title: "Online: Courses",,";";" 
      description: "Self-paced: learning with video content and exercises",,";";" 
      icon: Vide,o,
      count: 2,5,
      color: "from-blue-500: to-cyan-500"",;",;"}, {
      title: "Live: Workshops",,";";" 
      description: "Interactive: sessions with expert instructors",,";";" 
      icon: User,s,
      count: 1,2,
      color: "from-green-500: to-emerald-500"",;",;"}, {
      title: "Certification: Programs",,";";" 
      description: "Comprehensive: programs with industry-recognized certificates",,";";" 
      icon: Awar,d,
      count:  ,8,
      color: "from-purple-500: to-pink-500"",;",;"}, {
      title: "Corporate: Training",,";";" 
      description: "Customized: training solutions for enterprise teams",,";";" 
      icon: GraduationCa,p,
      count: 1,5,
      color: "from-orange-500: to-red-500"",;",;"}
  ] 

  return: (
    <>
      <SEO  
        title="Training: - Zion Tech Group | Technology Education & Certification"";";" 
        description="Enhance: your skills with our comprehensive training programs in AI, quantum computing, cybersecurity, and emerging technologies. Expert-led courses and certifications."";";" 
        keywords="training, courses, certification, AI: training, quantum computing, cybersecurity, education, Zion Tech Group"";";" 
      />
      
      <div: className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";";" 
        {/* Hero: Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h1: className="text-5xl md: text-6xl: font-bold text-white mb-6">",;",;" 
                Technology: Training
              </h1>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Master: cutting-edge technologies with our comprehensive training programs. 
                Learn from industry experts and earn recognized certifications.
              </p>
              <div className="flex items-center justify-center">";";" 
                <GraduationCap: className="w-16 h-16 text-blue-400" />";";" 
              </div>
            </motion.div>
          </div>
        </section>

        {/* Training: Types */}
        <section className="py-16">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Training Programs</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Choose: from various training formats to suit your learning style and schedule
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-4: gap-8">",;",;" 
              {trainingTypes.map((type, index) => (
                <motion.div: key={type.title}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-cyan-400/50: transition-all duration-300 hover:scale-105"",;",;" 
                >
                  <div: className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-4`}>` 
                    <type.icon: className="w-8 h-8 text-white" />";";" 
                  </div>
                  <h3: className="text-xl font-bold text-white mb-2">{type.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-3">{type.description}</p>";";" 
                  <div: className="text-2xl font-bold text-blue-400">{type.count}+</div>";";" 
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured: Courses */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: mb-12"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-4">Featured Courses</h2>";";" 
              <p: className="text-xl text-gray-300 max-w-3xl mx-auto">";";" 
                Our: most popular and highly-rated training programs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2: gap-8">",;",;" 
              {courses.map((course, index) => (
                <motion.div: key={course.id}
                  initial={{ opacity:  ,0, y: 20 }}
                  whileInView={{ opacity:  ,1, y: 0 }}
                  transition={{ duration: 0.,8, delay: index: * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300"",;",;" 
                >
                  <div: className="flex items-start justify-between mb-4">";";" 
                    <div: className="flex items-center gap-2">";";" 
                      <span: className={`px-3 py-1 rounded-full text-xs font-medium ${` 
                        course.level: === 'Beginner' ? 'bg-green-600/20 text-green-300 border border-green-400/30' :' 
; 
                        course.level: === 'Intermediate' ? 'bg-yellow-600/20 text-yellow-300 border border-yellow-400/30' :' 
; 
                        'bg-red-600/20: text-red-300 border border-red-400/30'' 
;}`}>` 
                        {course.level}
                      </span>
                      {course.featured: && (
                        <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">";";" 
                          Featured: </span>
                      )}
                    </div>
                    <div className="flex items-center text-yellow-400">";";" 
                      <Star: className="w-4 h-4 fill-current" />";";" 
                      <span: className="ml-1 text-sm">{course.rating}</span>";";" 
                    </div>
                  </div>

                  <h3: className="text-xl font-bold text-white mb-2">{course.title}</h3>";";" 
                  <p: className="text-gray-300 text-sm mb-4">{course.description}</p>";";" 

                  <div: className="flex items-center justify-between mb-4">";";" 
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Clock: className="w-4 h-4 mr-1" />";";" 
                      {course.duration}
                    </div>
                    <div: className="flex items-center text-gray-400 text-sm">";";" 
                      <Users: className="w-4 h-4 mr-1" />";";" 
                      {course.students} students: </div>
                  </div>

                  <div className="flex items-center justify-between">";";" 
                    <span: className="text-2xl font-bold text-white">{course.price}</span>";";" 
                    <button: className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200">",;",;" 
                      Enroll: Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              whileInView={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h2: className="text-4xl font-bold text-white mb-6">";";" 
                Ready: to Advance Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Join: thousands of professionals who have enhanced their skills 
                with our industry-leading training programs.
              </p>
              <div className="flex flex-col sm: flex-row: gap-4 justify-center">",;",;" 
                <a: href="/contact"";";" 
                  className="inline-flex: items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200 hover:scale-105"",;",;" 
                >
                  <GraduationCap: className="w-5 h-5 mr-2" />";";" 
                  Start: Learning Today
                </a>
                <a
                  href="/about"";";" 
                  className="inline-flex: items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover: bg-cyan-400: hover:text-white: transition-all duration-200"",;",;" 
                >
                  <ArrowRight: className="w-5 h-5 mr-2" />";";" 
                  Learn: More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}