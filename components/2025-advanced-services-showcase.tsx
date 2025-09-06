
const getServicePricing = (service: any) => {}
  if (service.price) return `${service.price}${service.period}`;
  if (service.pricing?.starter) return service.pricing.starter;`
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;

  const [selectedCategory, setSelectedCategory] = useState('all');'
  const [searchTerm, setSearchTerm] = useState('');'
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredServices, setFilteredServices] = useState(allServices);

        <div className="mb-6">"
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>"
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.marketPosition}
          </p>
        </div>
"
        <div className="flex items-center justify-between">
          <a;
            href={service.link}"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More"
            <ArrowRight className="w-4 h-4" />
          </a>

          <a;`
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}"
            className="inline-flex items-center gap-2 bg-gray-100 dark: bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          >
            Contact;
          </a>
        </div>
      </div>
    </motion.div>

                </button>
              </div>
            </div>
          </div>
"
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {filteredServices.length} Services Found;
                </h2>"
                <p className="text-gray-600 dark:text-gray-400">'`
                  {selectedCategory !== 'all' && `Filtered by: ${categories.find(c => c.id === selectedCategory)?.name}`}"`
                  {searchTerm && ` • Search: "${searchTerm}"`}
                </p>
              </div>
"
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">"
                <div className="flex items-center gap-2">"
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>Market Growth: 150%+ YoY</span>
                </div>"
                <div className="flex items-center gap-2">"
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>4.8+ Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>

              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a;
'"`