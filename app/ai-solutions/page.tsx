

                    </div>
                    <span className ="text-sm text-cyan-400 font-medium">{service.category}</span>";
                  </div>
                  <div>
                    <h4 className ="text-lg font-semibold text-white mb-2">Use Cases</h4>";
                    <div className ="flex flex-wrap gap-2">";
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key ={useCaseIndex} className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full">";
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link to ={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />";
                </Link>

                    Start Free Trial
                  </>
                </div>

              </div>

                >
                  Get Started
                </>

              </div>

