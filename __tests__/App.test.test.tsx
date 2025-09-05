import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import { describe, it, expect } from '@jest/globals';
import App from '../App';

=======
import { describe, it, expect } from 'vitest';
import App from '../App';
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
<<<<<<< HEAD

  it('displays correct content', () => {
    render(<App />);
  });

  it('handles user interactions', () => {
    render(<App />);
  });
});
=======
  it('displays correct content', () => {
    render(<App />);
  });
  it('handles user interactions', () => {
    render(<App />);
  });
});
import { render,screen } from \'@testing-library/react\'; import { describe,it,expect } from \'vitest\'; import App from \'../App\'; describe(\'App\',() => { it(\'renders without crashing\',() => { render(<App />); expect(screen.getByRole(\'main\')).toBeInTheDocument()}); it(\'displays correct content\',() => { render(<App />)}); it(\'handles user interactions\',() => { render(<App />)})});
<<<<<<< HEAD
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
=======
const { render,screen } from "@testing-library/react"; import { describe,it,expect } from "vitest"; import App from "./App"; describe("App",() => { it("renders without crashing",() => { render(<App />); expect(screen.getByRole("main")).toBeInTheDocument()}); it("displays correct content",() => { render(<App />)}); it("handles user interactions",() => { render(<App />)})});''"
import { render, screen, describe, it, expect } from 'lucide-react'; import App from '../App'; describe('App',() => { it('renders without crashing',() => { render(<App />); expect(screen.getByRole('main')).toBeInTheDocument()}
}); it('displays correct content',() => { render(<App />)}
}); it('handles user interactions',() => { render(<App />)})}
});'
</App>'
>>>>>>> b4d898fba518bac526c850fb09a7d1e502e98a14
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
