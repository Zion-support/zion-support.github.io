  it(displays expected content", () => {
    render(<Sitemap  />)"
import { render, screen } from &apos;@testing - library/react",
import Sitemap from &apos;./Sitemap
describe(&apos;Sitemap&apos, () => {
  it(&apos;renders without crashing&apos, () => {
    render()
}
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()})
}
  it(&apos;displays expected content&apos, () => {
    render()
}
    // comment
    render(<Sitemap / >)"
    expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument();""
})"
"
}}""