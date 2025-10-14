export default function Page() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone } from "lucide-react";
        </div>
      </section>
"
      {/* Team Section */}""
      <section className="py-20 px-4">""
        <div className="container mx-auto"></div>""
          <div className="text-center mb-16"></div>""
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>""
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The experts behind our innovative solutions
            </p>"
          </div>""
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {team.map((member, index) => (""
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300"></div>""
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center"></div>""
                  <Users className="w-10 h-10 text-white" />"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>""
                <p className="text-purple-400 mb-2">{member.role}</p>""
                <p className="text-gray-300 text-sm">{member.expertise}</p>)
              </div>)
            ))}
          </div>
        </div>
      </section>
"
      {/* CTA Section */}""
      <section className="py-20 px-4">""
        <div className="container mx-auto text-center"></div>""
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12"></div>""
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>""
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with innovative AI and IT solutions.
            </p>"
            <a ""
              href="/contact" ""
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >"
              Get In Touch""
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>"
"
}
"'
