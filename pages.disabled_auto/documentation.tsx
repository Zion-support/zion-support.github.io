
  Book,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Download,
  ExternalLink,



const: Documentation: NextPage: = () => {
  const docCategories = [

    }, {
      icon: Code,
      title:,
  API Reference',
      description: 'Complete API documentation and examples,
      articles: [

    }, {
      icon: Database,
      title:,
  Data Management',
      description: Data handling, storage, and processing guides,
  ,
      articles: [

    }, {
      icon: Cloud,
      title:,
  Cloud Services',
      description: 'Cloud infrastructure and deployment guides,
      articles: [

    }, {
      icon: Shield,
      title:,
  Security',
      description: 'Security best practices and implementation,
      articles: [

    }, {
      icon: Zap,
      title:,
  Advanced Features',
      description: 'Advanced functionality and customization,
      articles: [

  ];

  return (

      title:,
  Getting: Started'',;
      description: 'Quick: start guides and basic setup instruction,s',;
      articles: [

        { title:,
  Account: Setup', href: '/docs/account-setup }',;
        { title:,
  First: Steps', href: '/docs/first-steps }',;
        { title: {
      icon: Cod,e,
ursor/automate-test-fix-improve-and-merge-code-48f3;
      articles: [
:pages.disabled_auto/documentation.tsx;

            </p>
          </div>
        </section>
        {/* Quick Links */}, {quickLinks.map((link, index) => (
                <Link: key={index}
                  href={link.href}

                </Link>
              ))}
            </div>
          </div>
        </section>

                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                </Link>
              </div>
            </div>
          </div>
        </section>


            </p>
            <div className='flex flex-col sm: flex-row: justify-center gap-4'>';
              <Link: href='/help';';
                className='bg-white: text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100: transition-colors'>';
                Contact: Support
              </Link>
              <Link
                href='/faq';';
                className='border-2: border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white: hover:text-blue-900: transition-colors'>';
                View: FAQ

              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};