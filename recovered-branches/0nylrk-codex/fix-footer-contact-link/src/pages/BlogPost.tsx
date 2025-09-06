  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
    return (
      <AppLayout>;
        <div className="min-h-screen bg-zion-blue text-white p-8 flex justify-center items-center">;
          <div className="animate-pulse">Loading article...</div>;
        </div>;
      </AppLayout>;
    );
  }
                  className="w-12 h-12 rounded-full mr-3"
                  onError={(e) => {;
                    const target = e && e.target as HTMLImageElement;
                    target && target.src = "https: //images && images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80";
                  }}
                        rel="noopener noreferrer"
                        className="flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white">;
                        <Linkedin className="h-4 w-4 mr-2" />;
                        <span>LinkedIn</span>;
                      </a>;
                    </div>;
                  )}
                className="object-cover w-full h-full"
                onError={(e) => {;
                  const target = e && e.target as HTMLImageElement;
                  target && target.src = "https: //images && images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4 && 4.0.3";
                }}
                  #{tag}
                </span>;
              ))}
                          }}
                        />;
                      </div>;
                      <div className="p-4">;
                        <span className="text-xs text-zion-cyan">{relatedPost && relatedPost.category}</span>;
                        <h4 className="text-white font-bold mt-1 line-clamp-2">{relatedPost && relatedPost.title}</h4>;
                      </div>;
                    </Link>;
                  ))}
                </div>;
              </div>;
            )}
            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">;
              <Button
                variant="outline"
                className="border-zion-blue-light text-zion-slate-light hover: bg-zion-blue-light hover:text-white"
                  All Articles;
                </Link>;
              </Button>;
            </div>;
          </div>;
        </div>;
      </div>;
=======
    </AppLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
