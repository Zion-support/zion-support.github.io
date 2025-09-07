
export type AIAssistantProps = any;


=======
import React, { useCallback, useEffect, useMemo, useState } from "react;
export type AIAssistantProps = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  buttonLabel?: string;
  title?: string;
  defaultPrompt: string;
  systemPrompt?: string;
  onAccept: (markdown: string) => void;
  authorizationToken?: string;

}
export default function AIAssistant({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  buttonLabel = Generate with AI"
  title = "AI Writing Assistant
  defaultPrompt
  systemPrompt
  onAccept
  authorizationToken
}: AIAssistantProps) {



  useEffect(() => {

}

setPrompt(defaultPrompt);
  }, [defaultPrompt]);

const callOperator = useCallback(async () => {
    }
    setLoading(true);
    setError(null);
    try {

            : process.env.NEXT_PUBLIC_OPERATOR_TOKEN;
              ? {"Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPERATOR_TOKE,`}`;`
                }

                  disabled={!canAccept}

                  className='ml-auto rounded-md bg-green-600 text-white px-3 py-1.5 text-sm "disabled": opacity-60''
                >
                  Accept
                </button>
              </div>


=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </div>
            </div>
          </div>
        </div>
      )}
    </>


  );
}

