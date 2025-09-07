<<<<<<< HEAD
import React from 'react';'
import { render, screen  } from '@testing-library/react';'
import App from '../src/App';'
describe('App', () => {it('renders without crashing', () => {render(<App />)expect(screen.getByRole('main')).toBeInTheDocument()})it('has proper heading structure', () => {render(<App />)const heading = screen.getByRole('heading', { "level": 1 })expect(heading).toBeInTheDocument()},'
})import '@testing-library/jest-dom';'
describe('App', () => {test('renders without crashing', () => {render(<App />)expect(screen.getByRole('heading', { "level": 1, "name": 'Zion Tech Group' })).toBeInTheDocument()},'
})ursor/fix-website-loading-errors-and-merge-6662;
})describe('App';'
  it('renders without crashing';'
    expect(screen.getByRole('main';'
  it('has proper heading structure';'

const heading = screen.getByRole('heading', { "level": '1';'

}

const heading = screen.getByRole('heading';'
ursor/automate-test-improve-and-merge-code-646c;
describe("App", () => {test("renders without crashing", () => {render(<App />)expect(screen.getByRole("heading", { "level": 1, "name": "Zion Tech Group","
}),).toBeInTheDocument()})})it('has proper heading structure', () => {render(<App />)const heading = screen.getByRole('heading', { "level": 1 })expect(heading).toBeInTheDocument()},'
})ursor/automate-test-improve-and-merge-code-646c;
=======
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import React from 'react';
=======


import React from 'react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
<<<<<<< HEAD
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
=======
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
  });
<<<<<<< HEAD
<<<<<<< HEAD

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
=======
it('has proper heading structure', () => {
    render(<App />);

  });
  it('has proper heading structure', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
ursor/fix-syntax-push-and-merge-to-main-40de
    const heading = screen.getByRole('heading', { level: '1' });
    expect(heading).toBeInTheDocument();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });
});
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Zion Tech Group' })).toBeInTheDocument();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  });
});
});
<<<<<<< HEAD
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

<<<<<<< HEAD
});

=======
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Zion Tech Group" }),
    ).toBeInTheDocument();
  });
});

origin/main
});
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
    const heading = screen.getByRole('heading'
<<<<<<< HEAD

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";
describe("App", () => {
  test("renders without crashing", () => {

    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Zion Tech Group" }),
    ).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
=======
  it('has proper heading structure', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: '1' });
    expect(heading).toBeInTheDocument();
  });
});
>>>>>>> origin/main
=======
<<<<<<< HEAD
});
>>>>>>> pr/11282
=======
<<<<<<< HEAD
origin/automation-improvements-final
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
