<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport MobileOptimizer from ./MobileOptimizerdescribe(MobileOptimizer,() => {" it(renders without crashing",() => {" render(<MobileOptimizer />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<MobileOptimizer />);
=======
import { render,screen  } from "@testing-library/reactimport MobileOptimizer from ./MobileOptimizerdescribe(MobileOptimizer,() => {" it(renders without crashing",() => {" render(<MobileOptimizer />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<MobileOptimizer />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</MobileOptimizer /><//MobileOptimizer />