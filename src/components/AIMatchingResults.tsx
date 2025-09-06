=======
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

export function AIMatchingResults({

  matches
  onSelectMatch
  isLoading = false
  projectDescription = ''
  serviceType: _serviceType = ''
}: AIMatchingResultsProps) {
  const [activeTab, setActiveTab] = useState('all')
  // Group matches by category
                                  </div>;
                                </div>;
                              )}





>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                                  </div>
                                </div>
                              )}
                            </div>

            )}
          </TabsContent>;
        ))}
      </Tabs>
    </div>
  )
};
;
