                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                      {/* ROI and Popularity */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Expected ROI:</span>
                          <span className="text-green-600 font-semibold ml-1">
                            {service.roi.split(' ')[0]} ROI
                          </span>
                        </div>
                        {service.popular && (
                          <div className="flex items-center gap-1 text-yellow-600">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">Popular</span>
                          </div>
