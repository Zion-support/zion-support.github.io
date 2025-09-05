import React from 'react';

import App from './App';

describe(_'App Smoke Tests', _() => {_it(_'should render without crashing', _() => {
    expect__(() => render(<App />)).not.toThrow();});

  it(_'should render a basic structure', _() => {_const { container} = render(<App />);

    expect(container.firstChild).toBeTruthy();
  });
});
