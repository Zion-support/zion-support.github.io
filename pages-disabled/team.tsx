}
key={index}
                className=\"text-center\"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
               />
                <div className=\"text-4xl font-bold text-purple-600 mb-2\" />
                  {stat.number}
                </div>
                <div className=\"text-gray-600\" />{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className=\"py-16 bg-white\" />
        <div className=\"container mx-auto px-4\" />
          <div className=\"text-center mb-12\" />
            <h2 className=\"text-3xl font-bold text-gray-900 mb-4\" />
              Leadership Team
            </h2>
            <p className=\"text-xl text-gray-600\" />
              Visionary leaders driving innovation and growth
            </p>
          </div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className=\"text-purple-600 font-semibold\" />
                    {member.position}
                  </p>
                </div>
                <p className=\"text-gray-600 text-sm mb-4\" />{member.bio}</p>
                <div className=\"flex flex-wrap gap-2 mb-4\" />
                  {member.expertise.slice(0, 2).map((skill) => (}
                    <span;}
key={skill}
                      className=\"px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs\"
                     />
                      {skill}
                    </span>
                  ))}
                </div>
                <div className=\"flex justify-center space-x-4\" />
                  <a
href={member.linkedin}
                    className=\"text-gray-400 hover:text-blue-600 transition-colors\"
                   />
                    <Linkedin className=\"w-5 h-5\" />
                  </a>
                  <a
href={member.twitter}
                    className=\"text-gray-400 hover:text-blue-400 transition-colors\"
                   />
                    <Twitter className=\"w-5 h-5\" />
                  </a>
                  <a
href={member.github}
                    className=\"text-gray-400 hover:text-gray-600 transition-colors\"
                   />
                    <Github className=\"w-5 h-5\" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className=\"text-xl text-gray-600\" />
              Specialized teams working together to deliver excellence
            </p>
          </div>

          <div className=\"grid md:grid-cols-2 lg:grid-cols-4 gap-6\" />
            {departments.map((dept, index) => (}
              <motion.div;}
key={dept.name}
                className=\"text-center p-6 rounded-lg hover:bg-gray-50 transition-colors\"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
               />
                <div className=\"text-4xl mb-4\" />{dept.icon}</div>
                <h3 className=\"text-lg font-semibold mb-2\" />{dept.name}</h3>
                <p className=\"text-gray-600 text-sm mb-2\" />{dept.description}</p>
                <div className=\"text-purple-600 font-semibold\" />
                  {dept.count} members
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className=\"py-16 bg-purple-600 text-white\" />
        <div className=\"container mx-auto px-4 text-center\" />
          <h2 className=\"text-3xl font-bold mb-4\" />Join Our Growing Team</h2>
          <p className=\"text-xl mb-8 text-purple-100 max-w-3xl mx-auto\" />
            We're always looking for talented individuals who share our passion
for technology and innovation.
          </p>
          <div className=\"flex flex-col sm:flex-row justify-center gap-4\" />
            <Link
href=\"/careers\"
              className=\"bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors\"
             />
              View Open Positions
            </Link>
            <Link
href=\"/contact\"
              className=\"bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-colors\"
             />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className=\"py-20 bg-gray-50\" />
        <div className=\"container mx-auto px-4 text-center\" />
          <h2 className=\"text-4xl font-bold mb-6\" />
            Ready to Work with Our Expert Team?
          </h2>
          <p className=\"text-xl mb-8 text-gray-600 max-w-3xl mx-auto\" />
            Let's discuss how our experienced team can help transform your
business with cutting-edge technology solutions.
          </p>
          <div className=\"flex flex-col sm:flex-row justify-center gap-4 mb-8\" />
            <Link
href=\"/contact\"
              className=\"bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg\"
             />
              Get Free Consultation
            </Link>
          </div>

          {/* Contact Information */}
          <div className=\"grid md:grid-cols-3 gap-8 mt-12\" />
            <div className=\"flex items-center justify-center\" />
              <Phone className=\"w-6 h-6 mr-2\" />
              <span />+1 302 464 0950</span>
            </div>
            <div className=\"flex items-center justify-center\" />
              <Mail className=\"w-6 h-6 mr-2\" />
              <span />kleber@ziontechgroup.com</span>
            </div>
            <div className=\"flex items-center justify-center\" />
              <MapPin className=\"w-6 h-6 mr-2\" />
              <span />364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
