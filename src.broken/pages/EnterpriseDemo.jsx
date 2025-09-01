import { ArrowRight, Calendar, CheckCircle, Clock, Star, Users import { Link  } from 'react-router-dom';

export default function Page() {
            <Card className="bg-zion - blue - dark border-zion -purple / 20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Live Interactive Demo</CardTitle>
                <CardDescription className="text-zion - slate -light">
                  Experience the platform in real - time with our product specialists
                </CardDescription>
              </CardHeader>
              <CardContent className="space - y-4">
                <div className="flex items - center text-zion - slate -light">
                  <Clock className="w-5 h-5 mr-3 text-zion -cyan"/>
                  <span > 45 - 60 minutes</span>
                </div>
                <div className="flex items - center text-zion - slate -light">
                  <Calendar className="w-5 h-5 mr-3 text-zion -cyan"/>
                  <span > Flexible scheduling</span>
                </div>
                <div className="flex items - center text-zion - slate -light">
                  <Users className="w-5 h-5 mr-3 text-zion -cyan"/>
                  <span > Up to 10 team members</span>
                </div>
                <Button className="w-full mt-6" asChild>
                  <Link to="/contact?type = demo">
                    Schedule Live Demo < ArrowRight className="w-4 h-4 ml-2"/>
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Self - Guided Demo */}
            <Card className="bg-zion - blue - dark border-zion -purple / 20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Self - Guided Tour</CardTitle>
                <CardDescription className="text-zion - slate -light">
                  Explore the platform at your own pace with guided walkthroughs
                </CardDescription>
              </CardHeader>
              <CardContent className="space - y-4">
                <div className="flex items - center text-zion - slate -light">
                  <Clock className="w-5 h-5 mr-3 text-zion -cyan"/>
                  <span > Available 24 / 7</span>
                </div>
                <div className="flex items - center text-zion - slate -light">
                  <CheckCircle className="w-5 h-5 mr-3 text-zion -cyan"/>
                  <span > No scheduling required</span>
                </div>
                <div className="flex items - center text-zion - slate -light">
                  <Users className="w-5 h-5 mr-3 text-zion -cyan"/>
                  <span > Individual exploration</span>
                </div>
                <Button variant="outline" className="w-full mt-6" asChild>
                  <Link to="/zion - hire - ai">
                    Start Self - Guided Tour < ArrowRight className="w-4 h-4 ml-2"/>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* What You'll See */}
          <div className="mb-16">
            <h2 className="text-3xl font - bold text-white mb-8 text-center">What You'll See in the Demo</h2>
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-6">
              <div className="bg-zion - blue - dark p - 6 rounded-lg border border-zion - purple / 20 text-center">
                <h3 className="text-xl font - bold text-white mb-3">AI Talent Matching</h3>
                <p className="text-zion - slate -light">
                  See how our AI algorithms match the perfect talent to your requirements
                </p>
              </div>

              <div className="bg-zion - blue - dark p - 6 rounded-lg border border-zion - purple / 20 text-center">
                <h3 className="text-xl font - bold text-white mb-3">Marketplace Features</h3>
                <p className="text-zion - slate -light">
                  Explore our comprehensive marketplace for services, equipment, and solutions
                </p>
              </div>

              <div className="bg-zion - blue - dark p - 6 rounded-lg border border-zion - purple / 20 text-center">
                <h3 className="text-xl font - bold text-white mb-3">Enterprise Dashboard</h3>
                <p className="text-zion - slate -light">
                  Experience our powerful analytics and management tools
                </p>
              </div>

              <div className="bg-zion - blue - dark p - 6 rounded-lg border border-zion - purple / 20 text-center">
                <h3 className="text-xl font - bold text-white mb-3">Integration Capabilities</h3>
                <p className="text-zion - slate -light">
                  Learn about seamless integration with your existing systems
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font - bold text-white mb-6">Ready to See Zion in Action?</h2>
            <p className="text-zion - slate - light text-lg mb-8 max - w-2xl mx -auto">
              Join hundreds of enterprises that have transformed their operations with Zion's AI - powered platform
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <Button size="lg" asChild>
                <Link to="/contact?type = demo">
                  Schedule Your Demo < ArrowRight className="w-4 h-4 ml-2"/>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/enterprise">
                  View Enterprise Plans
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>) }
