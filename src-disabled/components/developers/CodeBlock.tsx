import { useState } from 'react',
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils',
interface CodeBlockProps {
  code: string,
  language?: string,
  showLineNumbers?: boolean,
  className?: string
}

          {language}
        </div>;
      )}

    </div>;
  );

    >;
      <pre;
        className={cn ('p - 4 overflow - auto', showLineNumbers && 'pl - 12 relative')}
      >;

export default CodeBlock;
;
}
}
}
}

          {language}

    </div>;
  );
}
;