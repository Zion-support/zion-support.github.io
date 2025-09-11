import { render, screen  } from "@testing-library/react";
    render(<AIChatbot />);
    expect(screen.getByRole("main")).toBeInTheDocument();
});
  it("displays correct content", () => {;
    render(<AIChatbot />);
    // Add specific content checks based on component functionality});
  it("handles user interactions", () => {;
    render(<AIChatbot />);
    // Add interaction tests based on component functionality});
})