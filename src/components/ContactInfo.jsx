import { Link } from &apos;
import Link from &apos;next/link';react - router - dom&apos;';

;
import { Link } from &apos;react-router-dom';
import { Mail, Phone, MapPin, Globe, Clock, MessageSquare, ExternalLink, Star } from &apos;lucide-react&apos;&apos;'
export function ContactInfo() {
    return (}<section className=&apos;py-20 bg-zion-blue-dark&apos;>&apos;'
      <div className=&apos;container mx-auto px-4&apos;>&apos;'
        <div className=&apos;text-center mb-16&apos;>&apos;'          <h2 className=&apos;text-3xl md:text-4xl font-bold text-white mb-4&apos;>
            Get In Touch&apos;&apos;'&apos;&apos;
          </h2>&apos;&apos;'&apos;
          ;&apos;&apos;<p className=&apos;text-zion-slate-light text-lg max-w-3xl mx-auto&apos;>
            Ready to transform your business with cutting-edge technology?;
            Contact our experts today for a free consultation.&apos;
          </p>
        </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;grid grid-cols-1 l,g:grid-cols-2 gap-8&apos;>'&apos;&apos;{/* Contact Information */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;space-y-6&apos;>'&apos;&apos;'&apos;&apos;
            <Card className=&apos;bg-zion-blue border-zion-blue-light&apos;>'&apos;&apos;''
              <CardHeader>&apos;&apos;'&apos;&apos;'
                <CardTitle className=&apos;text-white flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                  <Phone className=&apos;h-5 w-5 text-zion-cyan&apos; />
                  Contact Details&apos;&apos;'&apos;&apos;
                </CardTitle>&apos;&apos;'&apos;&apos;'
                <CardDescription className=&apos;text-zion-slate-light&apos;>
                  Reach out to us through of these channels&apos;
                </CardDescription>&apos;&apos;'&apos;&apos;
              </CardHeader>&apos;&apos;'&apos;&apos;'
              <CardContent className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
                <div className=&apos;flex items-center gap-3&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <Phone className=&apos;h-5 w-5 text-zion-purple&apos; />&apos;
                  </div>&apos;&apos;'&apos;&apos;
                  <div>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-white font-medium&apos;>Phone&apos;</p>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-zion-cyan&apos;>+1 302 464 0950&apos;</p>
                  </div>
                </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center gap-3&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <Mail className=&apos;h-5 w-5 text-zion-purple&apos; />&apos;
                  </div>&apos;&apos;'&apos;&apos;
                  <div>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-white font-medium&apos;>Email&apos;</p>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-zion-cyan&apos;>kleber@ziontechgroup.com&apos;</p>
                  </div>
                </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center gap-3&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <MapPin className=&apos;h-5 w-5 text-zion-purple&apos; />&apos;
                  </div>&apos;&apos;'&apos;&apos;
                  <div>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-white font-medium&apos;>Address&apos;</p>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-zion-slate-light&apos;>
                      364 E Main St STE 1008&apos;
                      <br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                <div className=&apos;flex items-center gap-3&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;w-10 h-10 bg-zion-purple/20 rounded-full flex items-center justify-center&apos;>'&apos;&apos;'&apos;&apos;
                    <Globe className=&apos;h-5 w-5 text-zion-purple&apos; />&apos;
                  </div>&apos;&apos;'&apos;&apos;
                  <div>&apos;&apos;'&apos;&apos;'
                    <p className=&apos;text-white font-medium&apos;>Website&apos;</p>&apos;&apos;'&apos;&apos;
                    <a&apos;&apos;'';
                      href=&apos;https://ziontechgroup.com&apos;&apos;'';
                      target=&apos;_blank&apos;&apos;'';
                      rel=&apos;noopener noreferrer&apos;&apos;'';
                      className=&apos;text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center gap-1 &apos;>'&apos;';
                      ziontechgroup.com&apos;&apos;'&apos;&apos;'
                      <ExternalLink className=&apos;h-4 w-4&apos; />&apos;
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
            <Card className=&apos;bg-zion-blue border-zion-blue-light&apos;>'&apos;&apos;''
              <CardHeader>&apos;&apos;'&apos;&apos;'
                <CardTitle className=&apos;text-white flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                  <Clock className=&apos;h-5 w-5 text-zion-cyan&apos; />
                  Business Hours&apos;&apos;'&apos;&apos;
                </CardTitle>&apos;&apos;'&apos;&apos;'
                <CardDescription className=&apos;text-zion-slate-light&apos;>';
                  We&apos;re available when you need us&apos;&apos;
                </CardDescription>
              </CardHeader>&apos;&apos;'&apos;&apos;
              <CardContent>&apos;&apos;'&apos;&apos;'
                <div className=&apos;space-y-2 text-zion-slate-light&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;flex justify-between&apos;>'&apos;&apos;''
                    <span>Monday - Friday</span>&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-zion-cyan&apos;>
                      9:00 AM - 6:00 PM EST&apos;
                    </span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex justify-between&apos;>'&apos;&apos;''
                    <span>Saturday</span>&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-zion-cyan&apos;>
                      10:00 AM - ,4:00 PM EST&apos;
                    </span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex justify-between&apos;>'&apos;&apos;''
                    <span>Sunday</span>&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-zion-cyan&apos;>By Appointment&apos;</span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;pt-2 border-t border-zion-blue-light&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;flex justify-between&apos;>'&apos;&apos;'&apos;&apos;
                      <span className=&apos;text-zion-cyan font-medium&apos;>
                        24/7 Support&apos;
                      </span>&apos;&apos;'&apos;&apos;
                      <Badge&apos;&apos;'&apos;
                        variant=&apos;secondary&apos;&apos;'';
                        className=&apos;bg-green-500/20 text-green-400 border-green-500/30 &apos;>
                        Available&apos;&apos;
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
&apos;&apos;'{/* Quick Actions & Services */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;space-y-6&apos;>'&apos;&apos;'&apos;&apos;
            <Card className=&apos;bg-zion-blue border-zion-blue-light&apos;>'&apos;&apos;''
              <CardHeader>&apos;&apos;'&apos;&apos;'
                <CardTitle className=&apos;text-white flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                  <MessageSquare className=&apos;h-5 w-5 text-zion-cyan&apos; />
                  Quick Actions&apos;&apos;'&apos;&apos;
                </CardTitle>&apos;&apos;'&apos;&apos;'
                <CardDescription className=&apos;text-zion-slate-light&apos;>
                  Get started with our most popular services&apos;
                </CardDescription>&apos;&apos;'&apos;&apos;
              </CardHeader>&apos;&apos;'&apos;&apos;'
              <CardContent className=&apos;space-y-4&apos;>'&apos;&apos;'&apos;&apos;
                <Link to=&apos;/request-quote&apos;>'&apos;&apos;'&apos;&apos;
                  <Button className=&apos;w-full bg-zion-purple hover:bg-zion-purple-dark text-white&apos;>
                    Request Free Quote&apos;
                  </Button>
                </Link>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                <Link to=&apos;/comprehensive-services&apos;>'&apos;&apos;''
                  <Button&apos;&apos;'&apos;
                    variant=&apos;outline&apos;&apos;'';
                    className=&apos;w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 &apos;>
                    View All Services&apos;&apos;
                  </Button>
                </Link>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                <Link to=&apos;/it-onsite-services&apos;>'&apos;&apos;''
                  <Button&apos;&apos;'&apos;
                    variant=&apos;outline&apos;&apos;'';
                    className=&apos;w-full border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light/10 &apos;>
                    IT Onsite Services&apos;&apos;
                  </Button>
                </Link>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
                <div className=&apos;pt-4 border-t border-zion-blue-light&apos;>'&apos;&apos;'&apos;&apos;
                  <p className=&apos;text-zion-slate-light text-sm mb-3&apos;>
                    Need immediate assistance?&apos;&apos;'&apos;&apos;
                  </p>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                    <Phone className=&apos;h-4 w-4 text-zion-cyan&apos; />&apos;&apos;'&apos;&apos;'
                    <span className=&apos;text-zion-cyan font-medium&apos;>
                      Call us no,w: +1 302 464 0950&apos;
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
            <Card className=&apos;bg-zion-blue border-zion-blue-light&apos;>'&apos;&apos;''
              <CardHeader>&apos;&apos;'&apos;&apos;'
                <CardTitle className=&apos;text-white flex items-center gap-2&apos;>'&apos;&apos;'&apos;&apos;
                  <Star className=&apos;h-5 w-5 text-zion-cyan&apos; />
                  Why Choose Zion Tech Group?&apos;&apos;'&apos;&apos;
                </CardTitle>&apos;&apos;'&apos;&apos;'
                <CardDescription className=&apos;text-zion-slate-light&apos;>
                  What makes us different from the competition&apos;
                </CardDescription>
              </CardHeader>&apos;&apos;'&apos;&apos;
              <CardContent>&apos;&apos;'&apos;&apos;'
                <div className=&apos;space-y-3 text-zion-slate-light&apos;>'&apos;&apos;'&apos;&apos;
                  <div className=&apos;flex items-start gap-2&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0&apos;>&apos;'</div>
                    <span>Global reach with local expertise</span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex items-start gap-2&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0&apos;>&apos;'</div>
                    <span>24/7 support and monitoring</span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex items-start gap-2&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0&apos;>&apos;'</div>
                    <span>Certified professionals</span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex items-start gap-2&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0&apos;>&apos;'</div>
                    <span>Competitive pricing</span>&apos;&apos;'&apos;&apos;
                  </div>&apos;&apos;'&apos;&apos;'
                  <div className=&apos;flex items-start gap-2&apos;>'&apos;&apos;'&apos;&apos;
                    <div className=&apos;w-2 h-2 bg-zion-cyan rounded-full mt-2 flex-shrink-0&apos;>&apos;'</div>
                    <span>Proven track record</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
&apos;&apos;'{/* Bottom CTA */}&apos;&apos;'&apos;&apos;'
        <div className=&apos;text-center mt-16&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-lg p-8 max-w-4xl mx-auto&apos;>'&apos;&apos;'&apos;&apos;
            <h3 className=&apos;text-2xl font-bold text-white mb-4&apos;>
              Ready to Get Started?&apos;&apos;'&apos;&apos;
            </h3>&apos;&apos;'&apos;&apos;'
            <p className=&apos;text-zion-slate-light mb-6&apos;>
              Join hundreds of satisfied clients who have transformed their;
              businesses with our technology solutions&apos;&apos;'&apos;&apos;
            </p>&apos;&apos;'&apos;&apos;'
            <div className=&apos;flex flex-col sm:flex-row gap-4 justify-center&apos;>'&apos;&apos;'&apos;&apos;
              <Link to=&apos;/request-quote&apos;>'&apos;&apos;''
                <Button&apos;&apos;'&apos;
                  size=&apos;lg&apos;&apos;'';
                  className=&apos;bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3 &apos;>
                  Get Free Consultation&apos;&apos;
                </Button>&apos;&apos;'&apos;&apos;
              </Link>&apos;&apos;'&apos;&apos;'
              <a href=&apos;tel:+13024640950&apos;>'&apos;&apos;''
                <Button&apos;&apos;'&apos;
                  size=&apos;lg&apos;&apos;'';
                  variant=&apos;outline&apos;&apos;'';
                  className=&apos;border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3 &apos;>
                  Call No,w: +1 302 464 0950&apos;&apos;
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )}&apos;&quot;&quot;"
}&apos;&apos;'';
&apos;&apos;'&apos;&apos;'
&apos;'