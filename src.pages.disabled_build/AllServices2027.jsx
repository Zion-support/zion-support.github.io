import React from "react"
import { SEO } from "@/components/SEO"
;,"});,"})


export default function AllServices2027() {return ("
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">"
      <SEO title="AllServices2027 - Zion Tech Group" description="Professional AllServices2027 services by Zion Tech Group"   />"
      <div className="container mx-auto px-4 py-20">"
        <h1 className="text-4xl font-bold text-white mb-8">AllServices2027</h1>"
        <p className="text-gray-300 text-lg">
          Professional AllServices2027 services to help your business grow.
        </p>
      </div>
"""
      {/* comment */}""""
      <section className="py-16 bg-zion-blue-dark">""""
        <div className="container mx-auto px-4">""""
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">"""
            <div>""""
              <div className="text-4xl font-bold mb-2">
                {ALL_SERVICES.length}+"""
              </div>""""
              <div className="text-zion-slate-light">Micro SAAS Services</div>
            </div>"""
            <div>""""
              <div className="text-4xl font-bold mb-2">50+</div>""""
              <div className="text-zion-slate-light">Industries Served</div>
            </div>"""
            <div>""""
              <div className="text-4xl font-bold mb-2">99%</div>""""
              <div className="text-zion-slate-light">Customer Satisfaction</div>
            </div>"""
            <div>""""
              <div className="text-4xl font-bold mb-2">24/7</div>""""
              <div className="text-zion-slate-light">Global Support</div>
            </div>
          </div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-20 bg-zion-blue">""""
        <div className="container mx-auto px-4">""""
          <div className="text-center mb-16">""""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?"""
            </h2>""""
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility and;
              proven results;
            </p>
          </div>"""
""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <Card"""
                key={index}""""
                className="bg-zion-blue-dark border-zion-blue-light text-white""""
              >""""
                <CardHeader className="text-center">""""
                  <div className="mx-auto w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}"""
                  </div>""""
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>"""
                </CardHeader>""""
                <CardContent className="text-center">""""
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>) ) }
          </div>
        </div>
      </section>
"""
      {/* comment */}""""
      <section className="py-20">""""
        <div className="container mx-auto px-4">"""
          {/* comment */}""""
          <div className="mb-8">""""
            <div className="flex flex-col md:flex-row gap-4 mb-6">""""
              <div className="relative flex-1">""""
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"   />"""
                <Input""""
                  placeholder="Search services..."""
                  value={searchQuery}"""
                  onChange={e => setSearchQuery(e.target.value)}""""
                  className="pl-10""" />
              </div>
              <select;
                value={sortBy}"""
                onChange={e => setSortBy(e.target.value)}""""
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zion-blue""""
              >""""
                <option value="featured">Featured First</option>""""
                <option value="rating">Highest Rated</option>""""
                <option value="price-low">Price: Low to High</option>""""
                <option value="price-high">Price: High to Low</option>""""
                <option value="ai-score">AI Score</option>
              </select>
            </div>
            {/* comment */}"""
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>""""
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-7">
                {SERVICE_CATEGORIES.map(category => (
                  <TabsTrigger;
                    key={category.id}"""
                    value={category.id}""""
                    className="flex items-center gap-2""""
                  >""""
                    <category.icon className="h-4 w-4" />""""
                    <span className="hidden md:inline">{category.name}</span>""""
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </TabsTrigger>) ) }
              </TabsList>
            </Tabs>
          </div>
"""
          {/* comment */}""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map(service => (
              <Card"""
                key={service.id}""""
                className="hover:shadow-lg transition-shadow duration-300"""
              >"""
                <CardHeader>""""
                  <div className="flex items-start justify-between mb-2">""""
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>"""
                    {service.featured && (""""
                      <Star className="h-5 w-5 text-yellow-500 fill-current"   />
                    )}"""
                  </div>""""
                  <CardTitle className="text-lg">{service.title}</CardTitle>""""
                  <CardDescription className="line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>"""
                <CardContent>""""
                  <div className="space-y-4">"""
                    {/* comment */}""""
                    <div className="flex items-center justify-between">""""
                      <span className="text-2xl font-bold text-zion-blue">
                        ${service.price}"""
                      </span>""""
                      <span className="text-sm text-gray-500">/month</span>
                    </div>
"""
                    {/* comment */}""""
                    <div className="space-y-2">""""
                      <h4 className="font-semibold text-sm">Key Features:</h4>""""
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li"""
                            key={index}""""
                            className="flex items-center text-sm text-gray-600""""
                          >""""
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"   />
                            {feature}
                          </li>) ) }
                      </ul>
                    </div>
"""
                    {/* comment */}""""
                    <div className="space-y-2">""""
                      <h4 className="font-semibold text-sm">Benefits:</h4>""""
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <li"""
                            key={index}""""
                            className="flex items-center text-sm text-gray-600""""
                          >""""
                            <TrendingUp className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0"   />
                            {benefit}
                          </li>) ) }
                      </ul>
                    </div>
"""
                    {/* comment */}""""
                    <div className="flex items-center justify-between text-sm">""""
                      <div className="flex items-center">""""
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1"   />"""
                        <span>{service.rating}</span>""""
                        <span className="text-gray-500 ml-1">
                          ({service.reviewCount})

                        </span>"""
                      </div>""""
                      <div className="flex items-center">""""
                        <Brain className="h-4 w-4 text-purple-500 mr-1"   />
                        <span>AI: {service.aiScore}</span>
                      </div>
                    </div>
"""
                    {/* comment */}""""
                    <div className="text-sm text-gray-500">
                      Market Price: {service.marketPrice}
                    </div>
"""
                    {/* comment */}""""
                    <div className="flex gap-2">""""
                      <Button className="flex-1" size="sm">
                        <Link"""
                          to={service.website}""""
                          target="_blank""""
                          className="flex items-center"""
                        >"""
                          Learn More""""
                          <ArrowRight className="h-4 w-4 ml-1"   />
                        </Link>"""
                      </Button>""""
                      <Button variant="outline" size="sm">""""
                        <Mail className="h-4 w-4 mr-1"   />
                        Contact;
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>) ) }
          </div>
          {/* comment */}"""
          {sortedServices.length === 0 && (""""
            <div className="text-center py-20">""""
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4"   />""""
              <h3 className="text-xl font-semibold mb-2">No services found</h3>""""
              <p className="text-gray-500">
                Try adjusting your search or filter criteria;
              </p>
            </div>) }
        </div>
    );
export { ALL_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO, BENEFITS, AllServices2027 };
export { ALL_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO, BENEFITS, AllServices2027 };
export { ALL_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO, BENEFITS, AllServices2027 };
export { ALL_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO, BENEFITS, AllServices2027 };
export { ALL_SERVICES, SERVICE_CATEGORIES, CONTACT_INFO, BENEFITS, AllServices2027 };