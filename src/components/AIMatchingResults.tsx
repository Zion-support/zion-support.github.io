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
                            
                            <div className="mt-2 flex flex-wrap gap-1">
                              <Badge variant="outline">
                                {match.category}
                              </Badge>
                              {match.skills && match.skills.slice(0, 3).map((skill: string, i: number) => (
                                <Badge key={i} variant="outline">
                                  {skill}
                                </Badge>;
                              ))}
                            </div>;

                            <div className='mt-2 flex flex-wrap gap-1'>;
                              <Badge variant='outline'>{match && match.category}</Badge>;
                              {match && match.skills &&;
                                match && match.skills;
                                  .slice(0, 3);
                                  .map((skill: string, i: number) => (;
                                    <Badge key={i} variant='outline'>;
                                      {skill}
                                    </Badge>;
                                  ))}                            </div>;
                                  </div>;
                                  <div className='text - xs text - zion - slate - light'>;
                                    {match.category;
                                      .toLowerCase ();
                                      .includes ('talent');
                                      ? '/hour';
                                      : ''}
                                  </div>;
                                </div>)}
                            </div>;
                            <div className='mt - 2 flex flex - wrap gap - 1'>;
                              <Badge variant='outline'>{match.category}</Badge>;
                              {match.skills &&;
                                match.skills;
                                  .slice (0, 3);
                                  .map ((skill: string, index: number) => (
                                    <Badge key={i} variant='outline'>;
                                      {skill}
                                    </Badge>))}                            </div>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;
}
