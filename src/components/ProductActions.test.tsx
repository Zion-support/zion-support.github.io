<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ProductActions from ./ProductActionsdescribe(ProductActions,() => {" it(renders without crashing",() => {" render(<ProductActions />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ProductActions />);
=======
import { render,screen  } from "@testing-library/reactimport ProductActions from ./ProductActionsdescribe(ProductActions,() => {" it(renders without crashing",() => {" render(<ProductActions />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ProductActions />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ProductActions /><//ProductActions />