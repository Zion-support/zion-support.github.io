import React from "react";

import { render } from "@testing-library/react";

describe("Components", () => {
  it("should render without crashing", () => {
    const { container } = render(<div>Test component</div>);
    expect(container).toBeInTheDocument();
  });
});
