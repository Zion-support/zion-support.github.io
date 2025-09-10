
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {



  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag,
  BookOpen,
  TrendingUp,
  Star,
  Eye,
  MessageCircle,
  Share2,
  Heart,
  Brain,
  Zap,
  Shield,
  Cloud,
  Database,
  Network,
  Code,
  Rocket,
  Target,
  Globe,
  Phone,


const Blog: React.FC = () => {
  const blogPosts = [

            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}

                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

                    .map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                      >
                        <Card className="overflow-hidden h-full">
                          <div className="relative h-48">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                          </div>'
                          <div className='p-6>
                            <div className='flex items-center mb-3 text-sm text-gray-400>
                              <User className='w-4 h-4 mr-2' />

                              {post.author}
                              <Calendar className="w-4 h-4 ml-4 mr-2" />
                              {new Date(post.date).toLocaleDateString()}
                              <Clock className="w-4 h-4 ml-4 mr-2" />
                              {post.readTime}

                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>

                    {categories.map((category, index) => (
                      <button
                        key={category.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${

                        }`}

                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>


