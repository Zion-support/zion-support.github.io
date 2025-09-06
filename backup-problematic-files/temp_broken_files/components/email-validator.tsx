                    )}
                  </Button>;
                  {validation_results.length > 0 && (
                    <Button;
              {stats && (
                <div className=&quot;mb - 6 p - 4 bg - gray - 900 rounded - lg border border - gray - 700 & quot;>;
                  <div className=&quot;grid grid - cols - 2 gap - 4 text - sm & quot;>;
                    <div>;
                      <span className=&quot;text - gray - 400 & quot;>Total:</span>;
                      <span className=&quot;ml - 2 text - white font - medium & quot;>{stats.total}</span>;
                    </div>;
                    <div>;
                      <span className=&quot;text - gray - 400 & quot;>Valid:</span>;
                      <span className=&quot;ml - 2 text - green - 400 font - medium & quot;>{stats.valid}</span>;
                    </div>;
                    <div>;
                      <span className=&quot;text - gray - 400 & quot;>Invalid:</span>;
                      <span className=&quot;ml - 2 text - red - 400 font - medium & quot;>{stats.invalid}</span>;
                    </div>;
                    <div>;
                      <span className=&quot;text - gray - 400 & quot;>Avg Score:</span>;
                      <span className={`ml - 2 font - medium ${getScoreColor (stats.avg_score)}`}>;
                        {stats.avg_score.to_fixed (0)}
                      </span>;
                    </div>;
                  </div>;
                </div>)}
{validation_results.length > 0 ? (
                <div className=&quot;space - y-3 max - h-96 overflow - y-auto & quot;>;
                  {validation_results.map ((result, index) => (
                    <div;
                      key={index}
                      }`}
>;
                      <div className=&quot;flex items - center justify - between mb - 2&quot;>;
                        <div className=&quot;flex items - center space - x-3 & quot;>;
                          {getStatusIcon (result.status)}
                          <span className={`font - medium ${getStatusColor (result.status)}`}>;
                            {result.email}
                          </span>;
                        </div>;
                        <span className={`text - sm font - medium ${getScoreColor (result.score)}`}>;
                          Score: {result.score}
                      {result.issues.length > 0 && (
                        <div className=&quot;text - sm & quot;>;
                          <span className=&quot;text - gray - 400 & quot;>Issues:</span>;
                          <ul className=&quot;mt - 1 space - y-1 & quot;>;
                            {result.issues.map ((issue: string, issue_index: number) => (
                              <li key={issue_index} className=&quot;text - red - 300 flex items - center & quot;>;
                                <XCircle className=&quot;w - 3 h - 3 mr - 2 flex - shrink - 0&quot; />;
                                {issue}
                              </li>))}
                          </ul>;
            </Card>;
          </div>;
        </div>;
      </section>;
      {/* Features */}
