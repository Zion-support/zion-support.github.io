import Skeleton from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { useState } from "react",
import { MatchResultItem } from "@/lib/ai-matchmaking",
import { Card, CardContent } from "@/components/ui/card",
import { Badge } from "@/components/ui/badge",
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { BarChart3, BriefcaseIcon, Monitor, User } from 'lucide-react'
import Skeleton from "@/components/ui/skeleton",
import { cn } from "@/lib/utils",
interface AIMatchingResultsProps {

  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem) => void
  isLoading?: boolean
  projectDescription?: string
  serviceType?: string;interface AIMatchingResultsProps {
  matches: MatchResultItem[]
  onSelectMatch?: (match: MatchResultItem,) => void
  isLoading?: boolean
  projectDescription?: string

  serviceType?: string
}

                                  </div>
                                </div>
                              )}
                            </div>
                            <div className='mt-2 flex flex-wrap gap-1'>
                              <Badge variant='outline'>{match.category}</Badge>
                              {match.skills &&
                                match.skills
                                  .slice(0, 3)
                                  .map((skill: string, i: number) => (
                                    <Badge key={i} variant='outline'>
                                      {skill}
                                    </Badge>
                                  ))}                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })
            ) : (
              <div className='text-center py-8 text-zion-slate-light'>
                No {tab} matches found.
              </div>
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  </Card>;
                );
              });
            ) : (;
              <div className="text-center py-8 text-zion-slate-light">;
                No {tab} matches found.;
              </div>;
            )}
          </TabsContent>;
        ))}
};
;
}
      </Tabs>;
    </div>;
  );
}

                  </Card>);
              })) : (
              <div className='text - center py - 8 text - zion - slate - light'>;
                No {tab} matches found.;
              </div>)}
          </TabsContent>))}
      </Tabs>;
    </div>);
}


