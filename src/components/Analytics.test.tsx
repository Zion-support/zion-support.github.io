<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport Analytics from ./Analyticsdescribe(Analytics,() => {it(renders without crashing,() => {", render(<Analytics />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<Analytics />);
=======
import { render,screen  } from "@testing-library/reactimport Analytics from ./Analyticsdescribe(Analytics,() => {it(renders without crashing,() => {", render(<Analytics />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<Analytics />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</Analytics /><//Analytics />