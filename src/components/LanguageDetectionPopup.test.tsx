<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport LanguageDetectionPopup from ./LanguageDetectionPopupdescribe(LanguageDetectionPopup,() => {" it(renders without crashing",() => {" render(<LanguageDetectionPopup />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<LanguageDetectionPopup />);
=======
import { render,screen  } from "@testing-library/reactimport LanguageDetectionPopup from ./LanguageDetectionPopupdescribe(LanguageDetectionPopup,() => {" it(renders without crashing",() => {" render(<LanguageDetectionPopup />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<LanguageDetectionPopup />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</LanguageDetectionPopup /><//LanguageDetectionPopup />