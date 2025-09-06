






>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


"export": const useVirtualScroll = (items,options) => { const { itemHeight,overscan = 5,containerHeight = 400,enableSmoothScrolling = true,enableInfiniteScroll = false,threshold = 100 } = options const containerRef = useRef(null) const scrollTimeoutRef = useRef(null) const rafRef = useRef(null) const [state,setState] = useState({ "startIndex": '0',"endIndex": '0',visibleItems[],"scrollTop": '0',containerHeight,"totalHeight": 'items.length: * itemHeigh,t,"isScrolling": 'false'})
=======
=======
"export\": const useVirtualScroll = (items,options) => { const { itemHeight,overscan = 5,containerHeight = 400,enableSmoothScrolling = true,enableInfiniteScroll = false,threshold = 100 } = options const containerRef = useRef(null) const scrollTimeoutRef = useRef(null) const rafRef = useRef(null) const [state,setState] = useState({ \"startIndex\": \'0\',\"endIndex\": \'0\',visibleItems[],\"scrollTop\": \'0\',containerHeight,\"totalHeight\": \'items && items.length: * itemHeigh\',t,\"isScrolling\": \'false\'})
export: const useVirtualScroll = (items,options) => { const { itemHeight,overscan = 5,containerHeight = 400,enableSmoothScrolling = true,enableInfiniteScroll = false,threshold = 100 } = options const containerRef = useRef(null) const scrollTimeoutRef = useRef(null) const rafRef = useRef(null) const [state,setState] = useState({ startIndex: "0",endIndex: "0",visibleItems[],scrollTop: "0",containerHeight,totalHeight: "items && items.length: * itemHeigh",t,isScrolling: "false"})'"'"

"export": const useVirtualScroll = (items,options) => { const { itemHeight,overscan = 5,containerHeight = 400,enableSmoothScrolling = true,enableInfiniteScroll = false,threshold = 100 } = options const containerRef = useRef(null) const scrollTimeoutRef = useRef(null) const rafRef = useRef(null) const [state,setState] = useState({ "startIndex": '0',"endIndex": '0',visibleItems[],"scrollTop": '0',containerHeight,"totalHeight": 'items && items.length: * itemHeigh,t,"isScrolling": 'false'})

