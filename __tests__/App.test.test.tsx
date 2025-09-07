<<<<<<< HEAD
<<<<<<< HEAD
it('displays correct content', () => {
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
=======
ursor/fix-syntax-push-and-merge-to-main-40de
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('displays correct content', () => {
    render(<App />);
  });
  it('handles user interactions', () => {
    render(<App />);
  });
});
import { render,screen } from \'@testing-library/react\'; import { describe,it,expect } from \'vitest\'; import App from \'../App\'; describe(\'App\',() => { it(\'renders without crashing\',() => { render(<App />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); it(\'displays correct content\',() => { render(<App />)}); it(\'handles user interactions\',() => { render(<App />)})});
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
  it('displays correct content', () => {
>>>>>>> origin/main
    render(<App />);

  });

  it('handles user interactions', () => {
    render(<App />);
  });
<<<<<<< HEAD

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { render, screen, describe, it, expect } from 'lucide-react'; import App from '../App'; describe('App',() => { it('renders without crashing',() => { render(<App />); expect(screen.getByRole('main')).toBeInTheDocument()}
}); it('displays correct content',() => { render(<App />)}
}); it('handles user interactions',() => { render(<App />)})}
});'});

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import App from '../App';

it('displays correct content', () => {

  it('displays correct content', () => {
    render(<App />);

  it('handles user interactions', () => {
    render(<App />);
  });

import { render, screen, describe, it, expect } from 'lucide-react'; import App from '../App'; describe('App',() => { it('renders without crashing',() => { render(<App />); expect(screen.getByRole('main')).toBeInTheDocument()}

}); it('displays correct content',() => { render(<App />)}

}); it('handles user interactions',() => { render(<App />)})}
});'

<<<<<<< HEAD
import { render, screen } from '@testing-library/react'

import { describe, it, expect } from 'vitest'
import App from '../App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('displays correct content'

});

</App>'

=======
<<<<<<< HEAD
</App>'
</App>'
</App>'
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('displays correct content'
<<<<<<< HEAD

});
</App>'
=======
});
>>>>>>> origin/main
=======
  it('handles user interactions'
import { render,screen } from \'@testing-library/react\'; import { describe,it,expect } from \'vitest\'; import App from \'../App\'; describe(\'App\',() => { it(\'renders without crashing\',() => { render(<App />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); it(\'displays correct content\',() => { render(<App />)}); it(\'handles user interactions\',() => { render(<App />)})});
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe('App', () => { it('renders without crashing', () => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it('displays correct content', () => { render(<App />)}); it("handles user interactions"
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
