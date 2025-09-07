
                Transparent Pricing Plans
              className="text-center mb-16
            >
              <h2 className=text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Code Security & Quality
              </h2>

                {
                  icon: <Eye className="w-8 h-8 />,
                  title: Automated Code Review",
                  description: "Intelligent code analysis with detailed feedback, improvement suggestions, and automated quality checks.
                }
                {
                  icon: <Lock className=w-8 h-8" />,
                  title: "Security Best Practices,
                  description: Enforce security standards, compliance requirements, and industry best practices automatically."
                }
                {
                  icon: <BarChart3 className="w-8 h-8 />,
                  title: Performance Analytics",
                  description: "Comprehensive metrics and insights to track code quality improvements and security posture over time.
                }
                {
                  icon: <Globe className=w-8 h-8" />,
                  title: "Integration & APIs,
                  description: Seamless integration with GitHub, GitLab, Bitbucket, and CI/CD pipelines with custom API access."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300
                >
                  <div className=w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4>{feature.title}</h3>
                  <p className=text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


                >
                  Contact Sales
                </motion.button>
              </div>


                <p>
                  14-day free trial • No credit card required • Cancel anytime
                </p>
              
              <div className=mt-8 text-gray-400">
                <p>14-day free trial • No credit card required • Cancel anytime</p>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Contact Information *
}


                </div>

                <div>

                  <p>364 E Main St STE 1008</p>
                  <p>Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
