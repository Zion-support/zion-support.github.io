  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  publishDate: string;
  category: string;
  featured?: boolean;
  href: string;
  metrics ? : {
    label: string;
      );
    }
    return0;
  });

    }
  };

  return (
                 }`}
              >
                {category}
              </button>
            ))}
          </div>

            ></select>
          </div>
        </div>

                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                    {item.description}
                  </p>

                  {/* Metrics */}
                  {  item.metrics  && (
                      ))}
                    </div>
                  )}

                    <span>{item.readTime}</span>
                    <span>{item.publishDate}</span>
                  </div>
                </div>

                      : item.type === 'guide'
                         ? 'Guide'
                         : 'Article' }{' '}
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
