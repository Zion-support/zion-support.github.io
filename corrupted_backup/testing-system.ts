export class TestingSystem {
<<<<<<< HEAD
  static async testUserInteraction(
    element: HTMLElement,
    action: 'click' | 'type' | 'hover'
  ) {
    switch (action) {
      case 'click':
        element.click();
        break;
      case 'type': // Handle typing
        break;
      case 'hover': // Handle hover
        break;
    }
  }
}
=======
  static async testUserInteraction (element: HTMLElement, action: 'click' | 'type' | 'hover') {
  switch (action) {
  case 'click': element.click ();
break;
case 'type': // Handle typing break;
case 'hover': // Handle hover 
}
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
