
          {analysis.suggestions.length > 0 && (<div>
              <h3 className="text-lg font - semibold mb-2">Suggestions:</h3>
              <ul className="space - y-2">
                {analysis.suggestions.map((suggestion, index) => (<li key={index} className="flex items - start space - x-2">
                    <span className="text-green - 500 mt-1">•</span>
