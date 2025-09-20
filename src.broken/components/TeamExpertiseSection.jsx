import React, { useState } from 'react';
}} viewport={{ once: true }} transition={{ duration: 0.6 }}>"
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">"
            Meet Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Expert Team</span>
          </h2>"
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Our world-class team of technology experts brings together decades of experience 
            across all major technology domains.Get to know the minds behind our success.</p>

          {/* Stats */}"
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (<motion.div key={index} initial = {

  { opacity: 0,
  scale: 0.8

}} whileInView = {

  { opacity: 1,
  scale: 1

}} viewport={{ once: true }} transition = {

  { duration: 0.4,
  delay: index * 0.1 
"
}} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">"
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>"
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>"
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>))}
          </div>
        </motion.div>

        {/* Expertise Areas */}"
        <motion.div className="mb-20" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} viewport={{ once: true }} transition = {

  { duration: 0.6,
  delay: 0.2

}}>"
          <h3 className="text-3xl font-bold text-white text-center mb-12">"
            Areas of <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Expertise</span>
          </h3>
          "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (<motion.div key={index} initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} viewport={{ once: true }} transition = {

  { duration: 0.4,
  delay: index * 0.1 
"
}} onHoverStart={() => setHoveredExpertise(index)} onHoverEnd={() => setHoveredExpertise(null)} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} mb-4 shadow-lg`}>"
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>
                "
                <h4 className="text-xl font-bold text-white mb-3">{area.name}</h4>"
                <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{area.description}</p>
                "
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>"
                    <div className="text-zion-cyan font-bold text-lg">{area.experts}</div>"
                    <div className="text-zion-slate-light text-xs">Experts</div>
                  </div>
                  <div>"
                    <div className="text-zion-purple font-bold text-lg">{area.projects}</div>"
                    <div className="text-zion-slate-light text-xs">Projects</div>
                  </div>
                  <div>"
                    <div className="text-zion-cyan-light font-bold text-lg">{area.success}</div>"
                    <div className="text-zion-slate-light text-xs">Success</div>
                  </div>
                </div>
              </motion.div>) ) }
          </div>
        </motion.div>

        {/* Team Members */}"
        <motion.div className="mb-20" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} viewport={{ once: true }} transition = {

  { duration: 0.6,
  delay: 0.3

}}>"
          <h3 className="text-3xl font-bold text-white text-center mb-12">"
            Leadership <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Team</span>
          </h3>
          "
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (<motion.div key={member.id} variants={itemVariants} whileHover={{ y: -8 }} transition = {
"
  { type: "spring",
  stiffness: 300 
"
}} className="relative">"
                <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group cursor-pointer" onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}>
                  {/* Header */}"
                  <div className="text-center mb-6">"
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-purple mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">"
                      <span className="text-white font-bold text-2xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    "
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {member.name}
                    </h4>"
                    <div className="text-zion-cyan font-medium text-sm mb-1">{member.role}</div>"
                    <div className="text-zion-slate-light text-xs">{member.expertise}</div>
                  </div>

                  {/* Quick info */}"
                  <div className="grid grid-cols-2 gap-3 mb-4">"
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">"
                      <div className="text-zion-cyan font-bold text-sm">{member.experience}</div>"
                      <div className="text-zion-slate-light text-xs">Experience</div>
                    </div>"
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">"
                      <div className="text-zion-cyan font-bold text-sm">{member.projects}</div>"
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                  </div>

                  {/* Skills preview */}"
                  <div className="mb-4">"
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Key Skills:</div>"
                    <div className="flex flex-wrap gap-1">"
                      {member.skills.slice(0, 3).map((skill, idx) => (<span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {skill}
                        </span>))}"
                      {member.skills.length > 3 && (<span className="text-zion-cyan/60 text-xs">
                          +{member.skills.length-3} more
                        </span>) }
                    </div>
                  </div>

                  {/* CTA */}"
                  <div className="flex items-center justify-between">"
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      View Profile
                    </span>"
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300"/>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>"
                    {selectedMember === member.id && (<motion.div className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" initial = {

  { opacity: 0, height: 0,
  y: 10

}} animate = {
"
  { opacity: 1, height: "auto",
  y: 0

}} exit = {

  { opacity: 0, height: 0,
  y: 10

}} transition={{ duration: 0.3 }}>"
                        <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">{member.bio}</p>
                        "
                        <h5 className="text-zion-cyan font-semibold text-sm mb-2">Achievements:</h5>"
                        <div className="space-y-1 mb-4">"
                          {member.achievements.map((achievement, idx) => (<motion.div key={idx} className="flex items-center gap-2 text-zion-slate-light/80 text-xs" initial = {

  { opacity: 0,
  x: -10

}} animate = {

  { opacity: 1,
  x: 0

}} transition={{ delay: idx * 0.1 }}>"
                              <CheckCircle className="w-3 h-3 text-zion-cyan"/>
                              <span>{achievement}</span>
                            </motion.div>) ) }
                        </div>
"
                        <div className="flex items-center justify-between">"
                          <div className="flex items-center gap-1">"
                            <Star className="w-4 h-4 text-yellow-400 fill-current"/>"
                            <span className="text-white font-semibold text-sm">{member.rating}</span>
                          </div>"
                          <div className="flex gap-2">"
                            <a href={member.linkedin} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">"
                              <Linkedin className="w-4 h-4"/>
                            </a>"
                            <a href={member.github} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">"
                              <Github className="w-4 h-4"/>
                            </a>
                            <a href = {
'`
  `mailto:${member.name.toLowerCase().replace(' ',.')
"`
}@ziontechgroup.com`} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">"
                              <Mail className="w-4 h-4"/>
                            </a>
                          </div>
                        </div>
                      </motion.div>) }
                  </AnimatePresence>
                </div>
              </motion.div>) ) }
          </div>
        </motion.div>

        {/* Call to action */}"
        <motion.div className="text-center" initial = {

  { opacity: 0,
  y: 20

}} whileInView = {

  { opacity: 1,
  y: 0

}} viewport={{ once: true }} transition = {

  { duration: 0.6,
  delay: 0.5

}}>"
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">"
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">"
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Work with Our Experts?
              </h3>"
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Our team is ready to bring your vision to life.Let's discuss how we can help you achieve your technology goals.</p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Schedule Consultation
                </button>"
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View All Team Members
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>)}
'"`