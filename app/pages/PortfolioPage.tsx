import SEOHead from '../components/SEOHead';";

      {/* Hero Section */};
      <section: className ="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>";
        <div: className ="absolute inset-0 overflow-hidden">";
        <div: className ="absolute inset-0 overflow-hidden">";
          <h1: className ="text-4xl font-bold mb-4">Coming Soon</h1>";
          <p: className ="text-gray-300">This page is under development...</p>";

const PortfolioPage: React.FC = () => {
  return (
    <>
      <SEOHead: title =" Portfolio Page - Zion Tech Group"";";
        description="Zion Tech Group  Portfolio Page service page"";";
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4"> Portfolio Page</h1>";";
          <p: className ="text-gray-300">Coming soon...</p>";";

                  <category.icon: className ="w-4 h-4 mr-2" />";
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section: className ="py-20 bg-slate-800"></section>"
        <div  className ="container mx-auto px-4">"
        <div  className ="container mx-auto px-4">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            {filteredProjects.map((project) => ()}
              <div  key ={project.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"></div>"
                {/* Project Image */}
                <div  className ="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
        <div  className ="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <div  className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>"
                      <className="w-8 h-8 text-white" />"
                    </div>
                    <h3  className ="text-xl font-semibold text-white">{project.title}</h3>"
                  </div>
                  <div  className ="absolute top-4 right-4 flex space-x-2"></div>"
                    <ahref={project.liveUrl},>
      target="_blank""
                      rel="noopener noreferrer""
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors""
                    ></a
>
                      <ExternalLink: className ="w-4 h-4 text-white" />"
                    </a>
                    <ahref={project.githubUrl},>
      target="_blank""
                      rel="noopener noreferrer""
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors""
                    ></a
>
                      <Github: className ="w-4 h-4 text-white" />"
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div  className ="p-6">"
        <div  className ="p-6">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <span  className ="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"></span>"
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                    <div  className ="flex items-center text-yellow-400"></div>"
                      <Star: className ="w-4 h-4 fill-current" />"
                      <span  className ="ml-1 text-sm font-medium">5.0</span>"
                    </div>
                  </div>

                  <h3  className ="text-xl font-semibold text-white mb-2">{project.title}</h3>"
                  <p  className ="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>"
                  {/* Technologies */}
                  <div  className ="mb-4"></div>"
                    <h4  className ="text-white font-medium mb-2 text-sm">Technologies:</h4>"
                    <div  className ="flex flex-wrap gap-2"></div>"
                      {project.technologies.map((tech) => ()}
                        <span  key ={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs"></span>"
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div  className ="mb-6"></div>"
                    <h4  className ="text-white font-medium mb-2 text-sm">Key Results:</h4>"
                    <ul: className ="space-y-1"></ul>"
                      {project.results.slice(0, 2).map((result) => ()}
                        <li: key ={index} className="flex items-center text-green-400 text-sm"></li>"
                          <CheckCircle: className ="w-3 h-3 mr-2 flex-shrink-0" />"
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Info */}
                  <div  className ="flex items-center justify-between text-sm text-gray-400 mb-4"></div>"
                    <span>Client: {project.client}</span>
                    <span>{project.duration}</span>
                  </div>

                  {/* Testimonial */}
                  <div  className ="bg-slate-600/30 p-4 rounded-lg mb-4"></div>"
                    <p  className ="text-gray-300 text-sm italic mb-2">"{project.testimonial.text}"</p>"
                    <div  className ="flex items-center">"
        <div  className ="flex items-center">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                        <span  className ="text-white text-xs font-bold"></span>"
                          {project.testimonial.author.split(' ').map(n => n[0]).join('')};"
                        </span>
                      </div>
                      <div></div>
                        <div  className ="text-white text-sm font-medium">{project.testimonial.author}</div>"
                        <div  className ="text-gray-400 text-xs">{project.testimonial.role}</div>"
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div  className ="flex space-x-3"></div>"
                    <ahref={project.liveUrl},>
      target="_blank""
                      rel="noopener noreferrer""
                      className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center""
                    ></a
>
                      <ExternalLink: className ="w-4 h-4 mr-2" />"
                      View Live
                    </a>
                    <ahref={project.githubUrl},>
      target="_blank""
                      rel="noopener noreferrer""
                      className="flex-1 border border-slate-600 hover:border-cyan-400 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center""
                    ></a
>
                      <Github: className ="w-4 h-4 mr-2" />";
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && ()}
            <div  className ="text-center py-12">"
        <div  className ="text-center py-12">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                <Search: className ="w-8 h-8 text-gray-400" />"
              </div>
              <h3  className ="text-xl font-semibold text-white mb-2">No projects found</h3>"
              <p  className ="text-gray-400">Try adjusting your search or filter criteria.</p>"
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section: className ="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"></section>"
        <div  className ="container mx-auto px-4 text-center"></div>"
          <h2  className ="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>"
          <p  className ="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>"
            Join our portfolio of successful projects and transform your business with cutting-edge technology.
          </p>
          <div  className ="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
            <>
              to="/contact""
              className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center""
            ></>
              <Target: className ="w-5 h-5 mr-2" />"
              Start Your Project
            </>
            <>
              to="/services""
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center""
            ></>
              <Rocket: className ="w-5 h-5 mr-2" />";
    </>";
  ),";";
};";";";
export default PortfolioPage;"
