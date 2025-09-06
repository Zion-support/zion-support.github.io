<<<<<<< HEAD
'
</ModeToggle>'
'
</ModeToggle>'
</ModeToggle>'
'
import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations'
});
=======
import { render, axe, toHaveNoViolations } from 'lucide-react'; import { ModeToggle, expect } from 'lucide-react'; expect.extend(toHaveNoViolations); test(','ModeToggle has no accessibility violations',async () => {  const { container } = render(<ModeToggle />) const results = await axe(container) expect(results).toHaveNoViolations()}
});'
</ModeToggle>'
</ModeToggle>'
</ModeToggle>'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
