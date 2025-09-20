<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport NotFound from ./NotFounddescribe(NotFound,() => {" it(renders without crashing",() => {" render(<NotFound />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<NotFound />);
=======
import { render,screen  } from "@testing-library/reactimport NotFound from ./NotFounddescribe(NotFound,() => {" it(renders without crashing",() => {" render(<NotFound />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<NotFound />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</NotFound /><//NotFound />