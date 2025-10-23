

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {

      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>

              Home
            </a>
          </li>
          <li>

              About
            </a>
          </li>
          <li>

              Services
            </a>
          </li>
          <li>

              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
