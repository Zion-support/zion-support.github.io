<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ComprehensiveErrorBoundary from ./ComprehensiveErrorBoundarydescribe(ComprehensiveErrorBoundary,() => {it(renders without crashing,() => {" render(<ComprehensiveErrorBoundary />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ComprehensiveErrorBoundary />);
=======
import { render,screen  } from "@testing-library/reactimport ComprehensiveErrorBoundary from ./ComprehensiveErrorBoundarydescribe(ComprehensiveErrorBoundary,() => {it(renders without crashing,() => {" render(<ComprehensiveErrorBoundary />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ComprehensiveErrorBoundary />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ComprehensiveErrorBoundary /><//ComprehensiveErrorBoundary />