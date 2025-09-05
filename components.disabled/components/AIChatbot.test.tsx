import { render,screen } from "@testing-library/react"; render(<AIChatbot />); expect(screen.getByRole("main")).toBeInTheDocument()}
}); it("displays correct content",() => {; render(<AIChatbot />); it("handles user interactions",() => {; render(<AIChatbot />)})"
</AIChatbot>"