  it(displays expected content", () => {
    render(<ListingCard  />)"
import { render, screen } from &apos;@testing - library/react"
import ListingCard from &apos;./ListingCard;
describe(&apos;ListingCard&apos, () => {
  it(&apos;renders without crashing&apos, () => {
    render()
}
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()})
}
  it(&apos;displays expected content&apos, () => {
    render()
}
    // comment;
    render(<ListingCard / >)"
    expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument();""
})"
"
}}""